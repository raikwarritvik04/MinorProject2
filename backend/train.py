import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier, GradientBoostingRegressor
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.metrics import accuracy_score, mean_squared_error, r2_score
import joblib
import os

def train_crop_recommendation():
    print("\n=== Training Crop Recommendation Model ===")
    rec_data = pd.read_csv('data/Crop_recommendation.csv')

    features = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']
    X = rec_data[features]
    y = rec_data['label']

    print(f"Features used for recommendation: {features}")

    # Encode target labels
    le = LabelEncoder()
    y_encoded = le.fit_transform(y)

    # Scale features
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)

    # Train/test split
    X_train, X_test, y_train, y_test = train_test_split(
        X_scaled, y_encoded, test_size=0.2, random_state=42
    )

    # Train Random Forest Classifier
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)

    # Predict and evaluate
    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Recommendation Model Accuracy: {accuracy:.4f}")

    # Save model, label encoder, scaler
    os.makedirs('models', exist_ok=True)
    joblib.dump(model, 'models/crop_recommender.pkl')
    joblib.dump(le, 'models/label_encoder.pkl')
    joblib.dump(scaler, 'models/scaler_recommendation.pkl')

def train_yield_prediction():
    print("\n=== Training Crop Yield Prediction Model ===")
    prod_data = pd.read_csv('data/Crop_production.csv')
    prod_data.columns = ['id', 'state', 'season', 'crop', 'N', 'P', 'K', 'ph', 'rainfall', 'temperature', 'area', 'production', 'yield']

    # Drop missing values
    prod_data.dropna(inplace=True)

    # Encode 'crop' as it's now a main feature
    crop_encoder = LabelEncoder()
    prod_data['crop_encoded'] = crop_encoder.fit_transform(prod_data['crop'])

    features = ['crop_encoded', 'ph', 'rainfall', 'temperature', 'area']
    X = prod_data[features]
    y = prod_data['yield']

    print(f"Features used for yield prediction: {features}")

    # Scale features
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)

    # Train/test split
    X_train, X_test, y_train, y_test = train_test_split(
        X_scaled, y, test_size=0.2, random_state=42
    )

    # Train Gradient Boosting Regressor
    model = GradientBoostingRegressor(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)

    # Predict and evaluate
    y_pred = model.predict(X_test)
    rmse = np.sqrt(mean_squared_error(y_test, y_pred))
    r2 = r2_score(y_test, y_pred)
    print(f"Yield Prediction Model RMSE: {rmse:.4f}")
    print(f"Yield Prediction Model R²: {r2:.4f}")

    # Save model, scaler, and crop encoder
    joblib.dump(model, 'models/yield_predictor.pkl')
    joblib.dump(scaler, 'models/scaler_yield.pkl')
    joblib.dump(crop_encoder, 'models/crop_encoder.pkl')

if __name__ == "__main__":
    train_crop_recommendation()
    train_yield_prediction()
    print("\nTraining complete. Models saved in 'models/' directory.")
