import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score, classification_report

# Load dataset
data = pd.read_csv('Crop_recommendation.csv')
features = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']
target = 'label'

# Feature matrix and target vector
X = data[features]
y = data[target]

# Scale features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Split into train and test sets
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

# Train KNN model
model = KNeighborsClassifier(n_neighbors=5)
model.fit(X_train, y_train)

# Predict on test set
y_pred = model.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print(f"KNN Accuracy: {accuracy:.2f}")
print("\nFeatures used:", features)
print("\nClassification Report:\n", classification_report(y_test, y_pred))

# Example input for prediction
example_input = pd.DataFrame([{
    'N': 80,
    'P': 40,
    'K': 40,
    'temperature': 22.0,
    'humidity': 80.0,
    'ph': 6.8,
    'rainfall': 190.0
}])

# Scale the example input using the same scaler
example_scaled = scaler.transform(example_input)

# Predict the crop for the example input
predicted_crop = model.predict(example_scaled)

print("\nExample input:")
print(example_input)
print(f"\nPredicted Crop for the example input: {predicted_crop[0]}")
