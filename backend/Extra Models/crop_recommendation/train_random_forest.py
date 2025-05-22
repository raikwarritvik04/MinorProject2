import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

# Load dataset
data = pd.read_csv('Crop_recommendation.csv')
features = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']
target = 'label'

# Feature matrix and target vector
X = data[features]
y = data[target]

# Split into train and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train Random Forest model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Predict on test set
y_pred = model.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print(f"Random Forest Accuracy: {accuracy:.2f}")
print("\nFeatures used:", features)
print("\nClassification Report:\n", classification_report(y_test, y_pred))

# Example input for prediction
example_input = pd.DataFrame([{
    'N': 85,
    'P': 58,
    'K': 45,
    'temperature': 23.5,
    'humidity': 78.5,
    'ph': 6.2,
    'rainfall': 210.0
}])

# Predict the crop for the example input
predicted_crop = model.predict(example_input)

print("\nExample input:")
print(example_input)
print(f"\nPredicted Crop for the example input: {predicted_crop[0]}")
