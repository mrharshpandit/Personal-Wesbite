
from flask import Flask, render_template, request

import pickle
import numpy as np
from sklearn.preprocessing import LabelEncoder
le = LabelEncoder()
crop_labels = ['wheat', 'rice', 'corn', 'barley']
le.fit(crop_labels) 
import joblib
app = Flask(__name__)

model = pickle.load(open('model.pkl','rb'))
@app.route('/')

def hello_world():
    return render_template('crop.html')


lr_model = joblib.load('linear_regression_model.pkl')
rf_clf = joblib.load('model.pkl')


@app.route('/predict', methods=['POST', 'GET'])

def predict():
    # Get the crop name input from the form
    crop_input = request.form['crop_name']  # Assuming you have a form field with name 'crop_name'
    
    try:
        # Convert crop name to encoded value using Label Encoder
        crop_code = le.transform([crop_input])[0]  # le is your LabelEncoder object
        
        # Predict the best season for this crop using the random forest classifier
        predicted_season_code = rf_clf.predict([[crop_code]])[0]  # Assuming the model needs only crop_code
        predicted_season = le.inverse_transform([predicted_season_code])[0]
        
        # Predict the minimum area required for this crop using the linear regression model
        predicted_area = lr_model.predict([[crop_code, predicted_season_code]])[0]  # Adjust model input
        
        # Render the result back to your HTML page
        return render_template('crop.html', 
                               pred=f'The best season to grow {crop_input} is {predicted_season}.',
                               area=f'Minimum area required for production: {predicted_area:.2f} hectares')
    
    except Exception as e:
        return render_template('crop.html', error=f'Error: {str(e)}')

if __name__ == '__main__':
    app.run(debug=True)
# def predict():
#     # Get the crop name input from the form
#     crop_input = request.form['crop_name']  # Assuming you have a form field with name 'crop_name'
    
#     # Convert crop name to encoded value using Label Encoder
#     crop_code = le.transform([crop_input])[0]  # le is your LabelEncoder object
    
#     # Predict the best season for this crop
#     predicted_season_code = rf_clf.predict([[0, 0, 2024, crop_code]])  # Adjust inputs as needed
#     predicted_season = le.inverse_transform([predicted_season_code])[0]
    
#     # Predict the minimum area required for this crop
#     predicted_area = lr_model.predict([[0, 0, 2024, crop_code, predicted_season_code]])[0]
    
#     # Render the result back to your HTML page
#     return render_template('crop_prediction.html', 
#                            pred='The best season to grow {} is {}.'.format(crop_input, predicted_season),
#                            area='Minimum area required for production: {:.2f} hectares'.format(predicted_area))
    
# if __name__ == '__main__':
#     app.run(debug=True)
    