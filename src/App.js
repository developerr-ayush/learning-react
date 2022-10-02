import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'

import {
  Routes,
  Route,
} from "react-router-dom";
import Alert from './components/Alert';


function App() {
  const [alert, setalert] = useState(null);
  let showAlert = (msg,typ) => {
    setalert({ message: msg, type: typ })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }


  const [darkLightmode, setdarkLightmode] = useState('dark');
  let mode = () => {
    if (darkLightmode === "dark") {
      setdarkLightmode("light")
      document.body.style.background = "#1a1a1a"
      document.body.style.color = "#fff"
      showAlert("Light mode Enabled","success")
    } else {
      setdarkLightmode("dark")
      document.body.style.background = "#fff"
      document.body.style.color = "#1a1a1a"
      showAlert("Dark mode Enabled","success")

    }
  }
  
  return (
    <>
      <Navbar title="My Website" mode={mode} state={darkLightmode} />

      <Alert alert={alert} />
      <Routes>
        <Route path='/' element={<Textform heading="Form convert texts" showAlert={showAlert} state={darkLightmode} />} />
        <Route path='/about' element={<About state={darkLightmode} />} />
      </Routes>
    </>
  );
}

export default App;
