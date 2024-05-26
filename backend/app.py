import os
import pandas as pd
from flask import Flask, request, render_template, jsonify, send_from_directory
from flask_cors import cross_origin
import BangalorePricePrediction as tm

app = Flask(__name__)

# Load the housing_clean.csv file
housing_data = pd.read_csv('housing_clean.csv')

@app.route('/api/get_location_names', methods=['GET'])
def get_location_names():
    response = jsonify({
        'locations': tm.get_location_names()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/api/get_area_names', methods=['GET'])
def get_area_names():
    response = jsonify({
        'area': tm.get_area_values()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/api/get_availability_names', methods=['GET'])
def get_availability_names():
    response = jsonify({
        'availability': tm.get_availability_values()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/api/predict', methods=['POST'])
@cross_origin()
def predict():
    sqft = float(request.form['sqft'])
    bhk = int(request.form['bhk'])
    bath = int(request.form['bath'])
    loc = request.form.get('loc')
    area = request.form.get('area')
    availability = request.form.get('avail')

    prediction = round(float(tm.predict_house_price(loc, area, availability, sqft, bhk, bath)), 2)

    return jsonify({'predicted_price': prediction})



@app.route('/api/get_houses_by_location', methods=['POST'])
@cross_origin()
def get_entries_by_location():
    location = request.form.get('location')
    if not location:
        return jsonify({'error': 'Location not provided'}), 400

    # Filter the data based on the location
    filtered_data = housing_data[housing_data['location'] == location]

    # Convert the filtered data to a list of dictionaries
    entries = filtered_data.to_dict(orient='records')

    return jsonify({'entries': entries})

@app.route('/api/get_houses_by_area_type', methods=['POST'])
@cross_origin() 
def get_entries_by_area_type():
    area_type = request.form.get('area_type')
    if not area_type:
        return jsonify({'error': 'Area type not provided'}), 400

    # Filter the data based on the area type
    filtered_data = housing_data[housing_data['area_type'] == area_type]

    # Convert the filtered data to a list of dictionaries
    entries = filtered_data.to_dict(orient='records')

    return jsonify({'entries': entries})

@app.route('/api/get_properties', methods=['POST'])
@cross_origin()
def get_properties():
    location = request.form.get('location')
    area = request.form.get('area')
    availability = request.form.get('availability')

    # Start with the full dataset
    filtered_data = housing_data.copy()

    # Apply filters based on provided attributes
    if location:
        filtered_data = filtered_data[filtered_data['location'] == location]
    if area:
        filtered_data = filtered_data[filtered_data['area_type'] == area]
    if availability:
        filtered_data = filtered_data[filtered_data['availability'] == availability]

    # If no filters are provided, return a random sample of 100 properties
    if not location and not area and not availability:
        filtered_data = housing_data.sample(n=100)

    # Convert the filtered data to a list of dictionaries
    entries = filtered_data.to_dict(orient='records')

    return jsonify({'entries': entries})

if __name__ == "__main__":
    tm.load_saved_attributes()
    print("Server running successfully!")
    app.run(debug=True)
