from flask import Flask, jsonify, request , redirect, url_for
from flask_cors import CORS, cross_origin
import numpy as np

import pickle5 as pickle




# creating a Flask app
app = Flask(__name__)

app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
app.config['CORS_HEADERS'] = 'Content-Type'

cors = CORS(app, resources={r"/": {"origins": "http://localhost:3000"}}) 
# on the terminal type: curl http://127.0.0.1:5000/
# returns hello world when we use GET.
# returns the data that we send when we use POST.
@app.route('/', methods = ['GET', 'POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def home():
    if(request.method == 'POST'):

        name = 'model.pkl'

        with open(name,'rb') as file:
            model = pickle.load(file)

        Arr = np.array([int(request.form['A1']),int(request.form['A2']),int(request.form['A3']),int(request.form['A4']),int(request.form['A5']),int(request.form['A6']) ,int(request.form['A7']) ,int(request.form['A8']) ]).reshape(1,-1)

        print(Arr)
        a = model.predict(Arr)
        
        #request.form['URL']


        print(a)
    
  
        
        return {'data': str(a[0])}
  
  


# driver function
if __name__ == '__main__':

  
    app.run(debug = True,host="0.0.0.0")
   
