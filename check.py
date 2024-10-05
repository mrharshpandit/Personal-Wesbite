import os
import pickle
model_path = os.path.join(os.getcwd(), 'model.pkl')
print("Model path:", model_path)  # This helps confirm the exact path being used
model = pickle.load(open(model_path, 'rb'))
