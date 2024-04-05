import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

axios.defaults.baseURL = 'http://localhost:8080';

const Login = () => {
  const [action, setAction] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleAuthAction = async (e) => {
    e.preventDefault();
    const url = action === "Login" ? "/auth/login" : "/auth/signup";
    const payload = action === "Login" ? { email, password } : { name, email, password };

    try {
      const response = await axios.post(url, payload);
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleAuthAction}>
        <div className="inputs">
          {action === "Sign up" && (
            <div className="input">
              <img src={user_icon} alt="" />
              <input 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
            </div>
          )}
          <div className="input">
            <img src={email_icon} alt="" />
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
        </div>
        {action === "Login" && (
          <div className="forgot-password">
            Lost password? <span>Click here!</span>
          </div>
        )}
        <div className="submit-container">
          <button type="submit" className="submit">
            {action}
          </button>
          <button type="button" className="submit gray" onClick={() => setAction(action === "Login" ? "Sign up" : "Login")}>
            {action === "Login" ? "Sign up" : "Login"}
          </button>
        </div>
      </form>
    </div>
  );

}

export default Login;