// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

 
  const showAlert=(msg,type)=>{
      setAlert({
        msg: msg,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1000);
  }

  const toggleMode=() => { 
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#2C3333"
      document.body.style.color="#E7F6F2"
      showAlert("Dark Mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="#E7F6F2"
      document.body.style.color="#2C3333"
      showAlert("Light Mode has been enabled","success")
    }
  }
  return (
    <>
    <Router>
      <Navbar title="Text Utils"  mode={mode} toggleMode={toggleMode}  />
      <Alert alert= {alert} />
      <Switch>
            <Route path="/about">
              <About mode={mode} />
            </Route>
            <Route path="/">
              <TextForm showAlert={showAlert} heading ="ENTER YOUR TEXT:" mode={mode}/>
            </Route>
      </Switch>  
      <Footer mode={mode} />    
    </Router>
    </>
  );
}

export default App;
