import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {
  const [weight, setWeight] = useState(null)
  const [height, setHeight] = useState(null)
  const [bmi, setBMI] = useState(0)
  const [status, setStatus] = useState("")

  const onSetWeight = e => {
    const value = e.target.value;
    setWeight(value)

  }
  const onSetHeight = e => {
    const value = e.target.value;
    setHeight(value)

  }

  const calculate = () => {
    const height2 = height*height;
    const result = weight/height2

    setBMI(result.toFixed(2))
    // console.log("Result",result)
    let bmiStatus = "[Obese]"
    if (result < 18.5) {
      bmiStatus = "[underwait]"
    }
    else if (result > 18.5 && result < 24.9) {
      bmiStatus = "[healthy]"
    } else if (result > 25 && result < 29.9) {
      bmiStatus = "[Overweight]"
    }
    else {
      bmiStatus = "[obese]"
    }
    setStatus(bmiStatus)

  }

  return (
    <div className="App" >
      <div style={{background:'rgb(22 110 93 / 97%)',width:'100%',height:"100vh",display:'flex',justifyContent:'center', }}>
        <div style={{background:'transparent',width:400,height:250,marginTop:20, boxShadow: '5px 5px 10px 10px rgb(56 68 68)'}}>
        <h1 style={{color:"#282c34"}}>BMI Calculator</h1>
        <div>
          <label className='label' >Weight:</label>
          <input style={{borderStyle:'outset',height:20,width:200,background:"transparent",marginBottom:15,color:"#000" }} value={weight} onChange={onSetWeight} type="number" placeholder="Enter Weight..." />
        </div>

        <div>
          <label className='label' >Height (m):</label>
          <input style={{borderStyle:'outset',height:20,width:200,background:"transparent"}} value={height} onChange={onSetHeight} type="number" placeholder="Enter Height..." />
        </div>

        <div>
          <button className='label' style={{background:"#16a085",borderColor:'#000',color:"#000"}}  disabled={!weight && !height} onClick={calculate}>My BMI</button>
        </div>

        <div style={{marginTop:15}}>
          <span className='label' style={{fontWeight:'bold',fontSize:18}} >Your BMI is: {bmi},</span>
          <span className='label'  style={{fontWeight:'bold',fontSize:18}}> You are: {status}</span>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
