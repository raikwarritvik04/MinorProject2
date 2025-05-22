import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score, mean_absolute_error, mean_squared_error

# Load data
data = pd.read_csv('Crop_production.csv')

# Remove spaces in column names
data.columns = data.columns.str.strip()

# Strip and lowercase 'Crop' values to ensure consistency
data['Crop'] = data['Crop'].str.strip().str.lower()

# Print column names
print("Columns in dataset:", data.columns.tolist())

# Encode 'Crop' column
le = LabelEncoder()
data['Crop'] = le.fit_transform(data['Crop'])

# Features and target
features = ['N', 'P', 'K', 'pH', 'rainfall', 'temperature', 'Area_in_hectares', 'Crop']
X = data[features]
y = data['Production_in_tons']

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train linear regression model
model = LinearRegression()
model.fit(X_train, y_train)

# Predictions and evaluation
y_pred = model.predict(X_test)

print("\nModel Evaluation:")
print("R2 Score:", r2_score(y_test, y_pred))
print("Mean Absolute Error:", mean_absolute_error(y_test, y_pred))
print("Mean Squared Error:", mean_squared_error(y_test, y_pred))

# Example prediction
example_crop_name = 'wheat'  # lowercase, matching the normalized dataset

# Check if crop exists
if example_crop_name in le.classes_:
    encoded_crop = le.transform([example_crop_name])[0]
else:
    raise ValueError(f"Crop '{example_crop_name}' not found in dataset.\nAvailable crops: {list(le.classes_)}")

example_input = pd.DataFrame([{
    'N': 90,
    'P': 40,
    'K': 40,
    'pH': 6.5,
    'rainfall': 210.0,
    'temperature': 24.0,
    'Area_in_hectares': 2.5,
    'Crop': encoded_crop
}])

# Predict production
predicted_production = model.predict(example_input)

print("\nExample input:")
print(example_input)
print(f"\nPredicted Production (in tons) for crop '{example_crop_name}': {predicted_production[0]:.2f}")
