import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Alert from "./Component/Alert";
import Navbar from "./Component/Navbar";
import LoadingBar from "react-top-loading-bar";
import Clothes from "./Component/Clothes";

function App() {
  const [mode, setMode] = useState("dark"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [progress, setProgress] = useState(0);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <div className="Container mx-3">
          <Alert alert={alert} />
          <LoadingBar height={3} color="#f11946" progress={progress} />
          <Clothes setProgress={setProgress} />
        </div>
      </Router>
    </>
  );
}

export default App;
