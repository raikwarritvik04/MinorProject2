from flask import Flask, jsonify, request
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

# Load Models and Scalers
label_encoder = joblib.load('models/label_encoder.pkl')
feature_scaler_recommend = joblib.load('models/scaler_recommendation.pkl')
feature_scaler_yield = joblib.load('models/scaler_yield.pkl')
recommend_model = joblib.load('models/crop_recommender.pkl')
yield_model = joblib.load('models/yield_predictor.pkl')
crop_encoder = joblib.load('models/crop_encoder.pkl')  # Load crop label encoder

# API Endpoints
@app.route('/api/recommend', methods=['POST'])
def recommend_crop():
    data = request.get_json()
    features = np.array([
        data['N'], data['P'], data['K'], data['temperature'], data['humidity'], data['ph'], data['rainfall']
    ]).reshape(1, -1)
    scaled_features = feature_scaler_recommend.transform(features)

    if hasattr(recommend_model, 'predict_proba'):
        probabilities = recommend_model.predict_proba(scaled_features)[0]
        top_n = 3  # Number of top crops to return
        top_indices = np.argsort(probabilities)[-top_n:][::-1]
        top_crops = label_encoder.inverse_transform(top_indices)
        crop_probs = {crop: float(probabilities[i]) for crop, i in zip(top_crops, top_indices)}
        return jsonify({'recommended_crops': crop_probs})
    else:
        predicted_crop_encoded = recommend_model.predict(scaled_features)[0]
        predicted_crop = label_encoder.inverse_transform([predicted_crop_encoded])[0]
        return jsonify({'recommended_crops': {predicted_crop: 1.0}})


@app.route('/api/predict-yield', methods=['POST'])
def predict_yield():
    data = request.get_json()

    # Ensure 'crop' is present and valid
    try:
        crop_encoded = crop_encoder.transform([data['crop']])[0]
    except ValueError:
        return jsonify({'error': f"Crop '{data['crop']}' not recognized."}), 400

    features = np.array([
        crop_encoded, data['ph'], data['rainfall'], data['temperature'], data['area']
    ]).reshape(1, -1)

    scaled_features = feature_scaler_yield.transform(features)
    predicted_yield = yield_model.predict(scaled_features)[0]

    return jsonify({'yield': predicted_yield})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
