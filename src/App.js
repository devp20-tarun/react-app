import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";


function App() {

  const[mode,setMode] = useState('light'); //whether dark mode is enabled or not
  const[bg,setBg] = useState({backgroundColor:'black',color:'white'});
  const[color,setColor] = useState({backgroundColor:'blue'});



  const toggleMode = ()=>{
    //let finalColor = 'red';
    if(mode ==='light'){
      setMode('dark');
      setBg({backgroundColor:'white',color:'black'})
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      document.title = "Devp20 - App-Dark";
    }
    else {
      setMode('light');
      setBg({backgroundColor:'black',color:'white'});
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.title = "Devp20 - App-Light";
    }
  }

  const toggleColor = (colors)=>{
    if(colors === 'blue'){
      setColor({backgroundColor:'blue',color:'#ffffff'});
      document.title = "Devp20 - App-"+colors;
    }
    else if(colors === 'red'){
      setColor({backgroundColor:'red',color:'#ffffff'});
      document.title = "Devp20 - App-"+colors;
    }
    else if(colors === 'green'){
      setColor({backgroundColor:'green',color:'#ffffff'});
      document.title = "Devp20 - App-"+colors;
    }
    else if(colors === 'pink'){
      setColor({backgroundColor:'pink',color:'#ffffff'});
      document.title = "Devp20 - App-"+colors;
    }
    else if(colors === 'yellow'){
      setColor({backgroundColor:'yellow',color:'#ffffff'});
      document.title = "Devp20 - App-"+colors;
    }
    else if(colors === 'orange'){
      setColor({backgroundColor:'orange',color:'#ffffff'});
      document.title = "Devp20 - App-"+colors;
    }

  }
  return (
    <>
    {/* <BrowserRouter>     */}
    <Navbar title="Tarun's App" home="Home" aboutText="About Us" mode={mode} toggleButton={toggleMode} toggleColor={toggleColor}></Navbar>
    <TextForm heading="Enter the text to analyze" rows="8" color={color} mode={mode} bg={bg} />
    <About mode={mode} bg={bg} />
    {/* <Routes>
      <Route exact path="" element={<Navigate replace to={`/home`}/>} />
        <Route exact path="/home" element={<TextForm heading="Enter the text to analyze" rows="8" color={color} mode={mode} bg={bg} />} />
        <Route exact path="/about" element={<About mode={mode} bg={bg} />} />
      </Routes>               
    </BrowserRouter>               */}
      </>
  );
}

export default App;
