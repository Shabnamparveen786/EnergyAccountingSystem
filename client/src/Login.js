import React from "react";
import images from "./../src/images/energy-accounting.jpg";
import "./../src/Login.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/routerContext";
import { useContext } from "react";

const Login = () => {
  const [user_id, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const { currentUser } = useContext(AuthContext);

  const onSubmit = async (e) => {
    e.preventDefault();
    await login(user_id, password);
    console.log(currentUser.role);
    if (currentUser.role === "admin") {
      alert("logged in succesfully");
      navigate("/dashboard");
    } else if (currentUser.role === "AE") {
      navigate("/AE_Dashboard1");
      alert("logged in succesfully");
    } else if (currentUser.role === "JE") {
      alert("logged in succesfully");
      navigate("/AE_Dashboard1");
    } else if (currentUser.role === "EEE") {
      alert("logged in succesfully");
      navigate("/AE_Dashboard1");
    } else {
      alert("user not found");
      console.log("user not found ");
    }
  };

  return (
    <>
      <section className="sign-in">
        <div className="container4 mt-10">
          <div className="signin-content">
            <div className="signin-image">
              <figure className="loginpic">
                <img src={images} alt="login pic" />
              </figure>
              <NavLink to="/" className="signup-image-link"></NavLink>
            </div>
            <div className="title1">Login Here</div>
            <form>
              <div className="ui divider"></div>
              <div className="user-details1">
                <div className="input-box1">
                  {/* <span className="details1">User Id</span> */}
                  <input
                    type="text1"
                    name="user_id"
                    placeholder="Enter Your User Id"
                    onChange={(e) => {
                      setUserid(e.target.value);
                    }}
                  />
                </div>
                <div className="input-box1">
                  {/* <span className="details1">Password</span> */}
                  <input
                    type="password1"
                    name="Password"
                    placeholder="Enter your Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="btn">
                <button type="submit" name="submit" onClick={onSubmit}>
                  {" "}
                  Login{" "}
                </button>
              </div>
            </form>
          </div>

          {/* <div className="sign-form1">
                            <h2 className="form-title1">Login</h2>
                            <form className="login form">
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text1" name="email" placeholder=" Enter your email" />  onChange={(e) => {
                                       setUserid(e.target.value);
                                       }}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="password1" name="password" placeholder=" Enter your passswprd" />
                                    onChange={(e) => {
                                      setPassword(e.target.value);
                                     }} 
                                </div>
                                
                                <div className="form-group form-button">
                                <input type="submit" name="Login" className="form-submit"  onClick={onSubmit}>
                                {" "}
                                Login{" "} 
                                </input>
                                </div>

                            </form>
                        </div> */}
        </div>
      </section>
    </>
  );
};

export default Login;
