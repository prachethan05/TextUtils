import React,{ useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import Alert from './Component/Alert';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('white');
      document.body.style.backgroundColor = '#404040';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <div >
      <div className="con" >
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
        <Alert alert={alert}/>
        <div className="container" >
          <TextForm showAlert={showAlert} mode={mode} heading="Enter your Text to Analyse Here" />
        </div>
      </div>
    </div>
  );
}
export default App;
