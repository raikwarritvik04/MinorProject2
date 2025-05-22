import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import r2_score, mean_squared_error

# Load the dataset
data = pd.read_csv('Crop_production.csv')

# Strip any spaces in column names
data.columns = data.columns.str.strip()

# Correct features and target
features = ['Area_in_hectares', 'temperature', 'rainfall', 'N', 'P', 'K']
target = 'Yield_ton_per_hec'

# Prepare data
X = data[features]
y = data[target]

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Model
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Predictions
y_pred = model.predict(X_test)

# Evaluation
r2 = r2_score(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)

print(f"Random Forest R2 Score: {r2:.2f}")
print(f"Mean Squared Error: {mse:.2f}")
print("\nFeatures used:", features)

# Example input for prediction
example_input = pd.DataFrame([{
    'Area_in_hectares': 2.0,
    'temperature': 26.5,
    'rainfall': 180.0,
    'N': 80,
    'P': 40,
    'K': 35
}])

predicted_yield = model.predict(example_input)

print("\nExample input:")
print(example_input)
print(f"\nPredicted Yield (tons per hectare): {predicted_yield[0]:.2f}")
