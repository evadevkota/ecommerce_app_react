import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login(props) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const navigateSignup = () => {
    navigate("/signup");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      props.showAlert("Login", "success");
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);

      props.showAlert("Login", "success");
      props.onLogin(true);
      navigate("/home");
    } else {
      props.showAlert("Invalid credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
   
      <section className="body">
        <div className="container">
          <div className="login-box">
            <div className="row">
              <div className="col-sm-6">
                <br />
                <h3 className="header-title">LOGIN</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      value={credentials.email}
                      onChange={onChange}
                      id="email"
                      name="email"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      value={credentials.password}
                      onChange={onChange}
                      name="password"
                      id="password"
                    />
            
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                  <div className="form-group">
                    <div className="text-center">
                    
                      <div className="text" style={{cursor:"pointer"}} onClick={navigateSignup}>
                      New Member?  Signup Now
          </div>
   
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-sm-6 hide-on-mobile">
                <div id="demo" className="carousel slide" data-ride="carousel">
                  {/* Indicators */}
                  <ul className="carousel-indicators">
                    <li
                      data-target="#demo"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                  </ul>
                  {/* The slideshow */}
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="slider-feature-card">
                        <img
                          src="https://i.pinimg.com/550x/e7/cc/ea/e7cceae7486cb623e6d515e41a35f52a.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  );
}

export default Login;
