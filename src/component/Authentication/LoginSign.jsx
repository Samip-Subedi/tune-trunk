import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, register } from "../../actions/UserActions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Icons
import { FiMail, FiLock, FiUser, FiUpload } from "react-icons/fi";

// Components
import Loader from "../../more/Loader";
import MetaData from "../../more/MetaData";

import "./LoginSign.css";

const LoginSignup = ({ history, location }) => {
  const dispatch = useDispatch();
  const { error, loading, isAuthenticated } = useSelector((state) => state.user);

  // Login states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [activeTab, setActiveTab] = useState("login");

  // Register states
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = user;
  const [avatar, setAvatar] = useState("/profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/profile.png");

  // Form handlers
  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    
    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  // Redirection logic
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      history.push(redirect);
    }
  }, [dispatch, error, history, isAuthenticated, redirect]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Login or Signup" />
          <div className="auth-container">
            <div className="auth-content">
              <div className="auth-card">
                <div className="auth-header">
                  <h2 className="auth-title">Welcome</h2>
                  <p className="auth-subtitle">Sign in to your account or create a new one</p>
                </div>
                
                <div className="auth-tabs">
                  <button 
                    className={`auth-tab ${activeTab === "login" ? "active" : ""}`}
                    onClick={() => setActiveTab("login")}
                  >
                    Login
                  </button>
                  <button 
                    className={`auth-tab ${activeTab === "register" ? "active" : ""}`}
                    onClick={() => setActiveTab("register")}
                  >
                    Register
                  </button>
                </div>
                
                {activeTab === "login" ? (
                  <form className="auth-form" onSubmit={loginSubmit}>
                    <div className="form-group">
                      <label htmlFor="loginEmail">Email</label>
                      <div className="input-group">
                        <FiMail className="input-icon" />
                        <input
                          type="email"
                          id="loginEmail"
                          placeholder="Enter your email"
                          required
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="loginPassword">Password</label>
                      <div className="input-group">
                        <FiLock className="input-icon" />
                        <input
                          type="password"
                          id="loginPassword"
                          placeholder="Enter your password"
                          required
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="form-links">
                      <Link to="/password/forgot" className="forgot-password">
                        Forgot Password?
                      </Link>
                    </div>
                    
                    <button type="submit" className="auth-button">
                      Login
                    </button>
                    
                    <div className="guest-login">
                      <Link to="/">
                        <span>Login as a guest</span>
                      </Link>
                    </div>
                  </form>
                ) : (
                  <form 
                    className="auth-form" 
                    encType="multipart/form-data"
                    onSubmit={registerSubmit}
                  >
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <div className="input-group">
                        <FiUser className="input-icon" />
                        <input
                          type="text"
                          id="name"
                          placeholder="Enter your name"
                          required
                          name="name"
                          value={name}
                          onChange={registerDataChange}
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <div className="input-group">
                        <FiMail className="input-icon" />
                        <input
                          type="email"
                          id="email"
                          placeholder="Enter your email"
                          required
                          name="email"
                          value={email}
                          onChange={registerDataChange}
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <div className="input-group">
                        <FiLock className="input-icon" />
                        <input
                          type="password"
                          id="password"
                          placeholder="Create a password"
                          required
                          name="password"
                          value={password}
                          onChange={registerDataChange}
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label>Profile Picture</label>
                      <div className="avatar-upload">
                        <div className="avatar-preview">
                          <img src={avatarPreview} alt="Avatar Preview" />
                        </div>
                        <div className="avatar-edit">
                          <label htmlFor="avatar-input" className="upload-label">
                            <FiUpload /> Choose Image
                          </label>
                          <input
                            type="file"
                            id="avatar-input"
                            name="avatar"
                            accept="image/*"
                            onChange={registerDataChange}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <button type="submit" className="auth-button">
                      Create Account
                    </button>
                  </form>
                )}
              </div>
            </div>
            
            <div className="auth-image">
              {/* Background image will be applied via CSS */}
            </div>
          </div>
          
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </>
      )}
    </>
  );
};

export default LoginSignup;