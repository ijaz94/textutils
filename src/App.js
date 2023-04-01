import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enable or disable
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
    setAlert(null);
    },1500);
  }
  const toggleMode = ()=>{
  if(mode === 'light'){
    setMode ('dark');
    document.body.style.backgroundColor = '#020c2e';
    showAlert("Dark mode his enable", "success");
    document.title = 'TextUtils - DarkMode';
  }
  else{
    setMode ('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode his enable", "success");
    document.title = 'TextUtils - LightMode';
  }
  }
  
  return (
    
   <>
   {/* <Router> */}
   {/* <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} /> */}
   <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/> 
   {/*<Navbar  /> */}
   <div className="container my-3">
   {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/"> */}
          <Textform showAlert={showAlert} heading="Enter The text to analyze below" mode={mode} />
          {/* </Route>
    </Switch> */}
   </div>
   {/* </Router> */}
   </>  
   
  );
}

export default App;
