
import { useState } from 'react';
import './App.css';
import axios from "axios";

function App() {

  const [data, setData] = useState({ age: null, pregnencies: null, glucose: null, blood: null, skin: null, insulin: null, bmi: null, diabete: null })

  const [result, setResult] = useState(null)
  const handleSubmit = (e) => {

    e.preventDefault()
    // alert("Patient is not diabetic !");
    let formData = new FormData();

    // Adding files to the formdata
    formData.append("A1", parseInt(data.age));
    formData.append("A2", parseInt(data.pregnencies));
    formData.append("A3", parseInt(data.glucose));
    formData.append("A4", parseInt(data.blood));
    formData.append("A5", parseInt(data.skin));
    formData.append("A6", parseInt(data.insulin));
    formData.append("A7", parseInt(data.bmi));
    formData.append("A8", parseInt(data.diabete));

    const url = "http://localhost:5000/";
    const options = {
      method: "POST",

      body: formData
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setResult(data.data)
        if (result == "0") {
          alert("Patient is not diabetic !");
        } else if (result == "1") {
          alert("Patient is diabetic !");
        }


      });

    // let formData = new FormData();

    // // Adding files to the formdata
    // formData.append("A1", parseInt(data.age));
    // formData.append("A2", parseInt(data.pregnencies));
    // formData.append("A3", parseInt(data.glucose));
    // formData.append("A4", parseInt(data.blood));
    // formData.append("A5", parseInt(data.skin));
    // formData.append("A6", parseInt(data.insulin));
    // formData.append("A7", parseInt(data.bmi));
    // formData.append("A8", parseInt(data.diabete));
    // console.log(formData)

    // axios({

    //   // Endpoint to send files
    //   url: "http://localhost:5000/",
    //   method: "POST",
    //   headers: {
    //     "Content-Type": 'multipart/form-data'
    //   },

    //   // Attaching the form data
    //   data: formData,
    // }).then((res) => {
    //     console.log(res);
    //   })

    //   // Catch errors if any
    //   .catch((err) => {
    //     console.log(err);
    //   });


  }
  return (
    <div className="App">
      <h1 className='headTxt'>Patient examination</h1>
      <form className='form' onSubmit={(e) => handleSubmit(e)}>
        <div className='input_container'>
          <span className='input_label'>Age :</span>
          <input className='input' type="number" value={data.age} required onChange={(e) => setData({ ...data, age: e.target.value })} />
        </div>
        <div className='input_container'>
          <span className='input_label'>Pregnencies :</span>
          <input className='input' type="number" value={data.pregnencies} required onChange={(e) => setData({ ...data, pregnencies: e.target.value })} />
        </div>
        <div className='input_container'>
          <span className='input_label'>Glucose :</span>
          <input className='input' type="number" value={data.glucose} required onChange={(e) => setData({ ...data, glucose: e.target.value })} />
        </div>
        <div className='input_container'>
          <span className='input_label'>Blood pressure :</span>
          <input className='input' type="number" value={data.blood} required onChange={(e) => setData({ ...data, blood: e.target.value })} />
        </div>
        <div className='input_container'>
          <span className='input_label'>Skin thickness :</span>
          <input className='input' type="number" value={data.skin} required onChange={(e) => setData({ ...data, skin: e.target.value })} />
        </div>
        <div className='input_container'>
          <span className='input_label'>Insulin :</span>
          <input className='input' type="number" value={data.insulin} required onChange={(e) => setData({ ...data, insulin: e.target.value })} />
        </div>
        <div className='input_container'>
          <span className='input_label'>BMI :</span>
          <input className='input' type="number" value={data.bmi} required onChange={(e) => setData({ ...data, bmi: e.target.value })} />
        </div>
        <div className='input_container'>
          <span className='input_label'>Diabets :</span>
          <input className='input' step="0.001" type="number" required value={data.diabete} onChange={(e) => setData({ ...data, diabete: e.target.value })} />
        </div>
        <div className='btn_container'>
          <button className='btn' type='submit'>Submit</button>
        </div>

      </form>
    </div>
  );
}

export default App;
