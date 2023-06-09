import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";



function App() {
  const[mode,setMode] = useState('light');
  
  const[alert,setAlert]= useState(null);

  const showAlert =(messege,type)=>{
    setAlert({
      msg:messege,
      type:type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode =() =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#343a40'
      showAlert("Dark mode has been enable","success")
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enable","success")
    }
  }
  return (
   <>
    {/* <Router> */}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3" >
        {/* <Routes> */}
            {/* <Route exact path="/about" element={ */}
            {/* <About mode={mode} /> */}
            {/* }/> */}
              
            {/* <Route  exact path="/" element={ */}
            <Form  showAlert={showAlert} heading = "Try Texutils - Word Counter, Character Counter, Copy Text:" mode={mode} />
            {/* }/> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
      
    </>
  );
}

export default App;
