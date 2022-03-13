
import './App.css';
import Navbar from './Components/Navbar.js'
import TextForm from './Components/TextForm.js'
//import About from './Components/About.js'
import React, {useState} from 'react'


function App() {
  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#4c4848';
      document.title = 'TextExchange- DarkMode';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.title = 'TextExchnage- LightMode';

    }
  }
  const [mode, setMode] = useState('light');
  return (
    <>
     <Navbar title="TextExchange" mode={mode} toggleMode={toggleMode}/>
       <div className="container my-3">
      <TextForm heading="Enter Text to Analyze Below" mode={mode} />
      </div>
    </>
  );
}

export default App;
