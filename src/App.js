import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Alert from "./Component/Alert";
import Navbar from "./Component/Navbar";
import LoadingBar from "react-top-loading-bar";
import Clothes from "./Component/Clothes";
import Cart from "./Component/Cart";
import Login from "./Component/Login";
import Signup from "./Component/Signup";

function App() {
  // const navigate = useNavigate();
  const [mode, setMode] = useState("dark"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user login status
  const [progress, setProgress] = useState(0)
 
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    // Toggle dark/light mode
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

  const handleLogin = () => {
    // Set user as logged in
    setIsLoggedIn(true);
   
  };

  const handleLogout = () => {
    // Set user as logged out
    setIsLoggedIn(false);
    
    // navigate('/login')
  };

  return (
    <Router>
    {!isLoggedIn ? (
      // Render Login component if user is not logged in
      <>
        <Alert alert={alert} />
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} showAlert={showAlert} />} />
          <Route path="/signup" element={<Signup onLogin={handleLogin} showAlert={showAlert} />} />
        </Routes>
      </>
    ) : (
      // Render components for logged-in user
      <>
        <Navbar mode={mode} toggleMode={toggleMode}onLogin={handleLogin} onLogout={handleLogout} />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
       
        <Alert alert={alert} />
        <div className="Container mx-3">
          <LoadingBar height={3} color="#f11946" />
          <Routes>
            <Route path="/home" element={<Clothes mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
            <Route path="/cart" element={<Cart mode={mode} />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </>
    )}
  </Router>
  );
}

export default App;
