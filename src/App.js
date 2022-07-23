import { useState, useSyncExternalStore } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


const x = 2;

function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlertState] = useState(null);

  const showAlert = (message, type)=>{
    setAlertState({
      msg : message,
      msgType : type
    });

    setTimeout(() => {
      setAlertState(null);
    }, 1500);

  }

  const toggleMode = ()=>{
    if(mode === "dark"){
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = 'rgb(27 3 34)';
      showAlert("Dark Mode has been enabled","success");
    }
  }

  return (
    <>    

    <Router>
    <Navbar title="Utilities" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-2">
    <Routes>
        <Route exact path="/about" element={<About/>} >
        </Route>
        <Route exact path="/" element={<TextForm heading="Enter the Text to Analyze :" mode={mode} showAlert={showAlert}/>}>
        </Route>
    </Routes>
    </div>
    </Router>

    </>
  );
}


export default App;
