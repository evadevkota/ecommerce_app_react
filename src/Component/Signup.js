import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  const [credentials, setCredentials] = useState({ email: "", password: "" ,name:""});
  let navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
        name: credentials.name
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      navigate("/home");
      props.showAlert("Login", "success");
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);

      props.showAlert("User Registered", "success");
      props.onLogin(true);

    } else {
      props.showAlert("Invalid credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  

  return (
    <div>

        <section className="body">
          <div className="container">
            <div className="login-box">
              <div className="row">
                <div className="col-sm-6 hide-on-mobile">
                  <div
                    id="demo"
                    className="carousel slide"
                    data-ride="carousel"
                  >
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
                            src="https://static.independent.co.uk/2023/05/11/17/online%20clothing%20stores.jpg?width=1200"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <br />

                  <h3 className="header-title">Sign Up</h3>
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
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        onChange={onChange}
                        aria-describedby="name"
                        placeholder="Enter Name"
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
                        <div
                          className="text"
                          style={{ cursor: "pointer" }}
                          onClick={navigateLogin}
                        >
                          Already have account? SignIn Now
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

    </div>
  );
}

export default Signup;
