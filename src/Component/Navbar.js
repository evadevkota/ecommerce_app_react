// Navbar.js

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({  onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any necessary logout actions
    onLogout();
    // Navigate to the login page
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
    
    <div class="container-fluid">
    <Link to="/home" className="navbar-brand">
        My Clothing
      </Link>
  
  
    <Link to="/cart" className="navbar-brand ms-auto">
          Cart
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <button className="btn btn-outline-light mx-2" onClick={handleLogout}>
          Logout
        </button>
    </button>
    </div>
  </nav>
  
  );
};

export default Navbar;
