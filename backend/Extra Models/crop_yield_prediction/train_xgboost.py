import pandas as pd
from sklearn.model_selection import train_test_split
from xgboost import XGBRegressor
from sklearn.metrics import r2_score, mean_squared_error

# Load the dataset
data = pd.read_csv('Crop_production.csv')

# Clean column names (remove extra spaces if any)
data.columns = data.columns.str.strip()

# Correct feature names based on actual CSV
features = ['Area_in_hectares', 'temperature', 'rainfall', 'N', 'P', 'K']
target = 'Yield_ton_per_hec'

# Prepare X and y
X = data[features]
y = data[target]

# Split the dataset
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train XGBoost model
model = XGBRegressor(random_state=42, n_estimators=200, learning_rate=0.1)
model.fit(X_train, y_train)

# Predictions
y_pred = model.predict(X_test)

# Evaluation
r2 = r2_score(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)

# Results
print(f"XGBoost R2 Score: {r2:.2f}")
print(f"Mean Squared Error: {mse:.2f}")
print("\nFeatures used:", features)

# Example input for prediction
example_input = pd.DataFrame([{
    'Area_in_hectares': 1.5,
    'temperature': 27.0,
    'rainfall': 200.0,
    'N': 85,
    'P': 45,
    'K': 30
}])

predicted_yield = model.predict(example_input)

print("\nExample input:")
print(example_input)
print(f"\nPredicted Yield (tons per hectare): {predicted_yield[0]:.2f}")
