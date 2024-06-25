import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Alert from './Alert';
import './App.css';
import Navbar from './Navbar';
import TextForms from './TextForms';
// import About from './About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#09244b';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
    {/* // <Router> */}
      <Navbar title="TextUtils" aboutUs="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForms showAlert={showAlert} heading="Enter Your Text to analyze" mode={mode} />
      {/* // <div className="container my-3">
    //     <Routes>
    //       <Route exact path="/about" element={<About />} />
          // <Route exact path="/" element={<TextForms showAlert={showAlert} heading="Enter Your Text to analyze" mode={mode} />} />
          // <TextForms showAlert={showAlert} heading="Enter Your Text to analyze" mode={mode} />

    //     </Routes>
    //   </div>
    // </Router> */}
  </>
  );
}

export default App;
