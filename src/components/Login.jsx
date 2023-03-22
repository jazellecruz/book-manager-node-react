import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import "../styles/login.css"
import { saveToken } from "../utils/utils.js"

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    let {name, value} = e.target;

    setCredentials({
      ...credentials,
      [name] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:8000/auth/login",
      data: credentials,
    })
    .then(res => {
      console.log(res)
      saveToken(res.data.accessToken);
      navigate("/");
    })
    .catch(err => console.log(err));

    setCredentials({
      username: "",
      password: ""
    });
  }

  return (
    <div className="login-section">
      <p>Welcome back</p>
      <p>Please enter your details.</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label for="username">Username</label>
          <input className="login-input" 
            type="text" 
            name="username" 
            value={credentials.username} 
            placeholder="Username"
            autoComplete="off" 
            onChange={(e) => handleChange(e)}
            required>
          </input>
        </div>
        <div>
          <label for="password">Password</label>
          <input className="login-input" 
            type="password" 
            name="password" 
            value={credentials.password} 
            placeholder="Password" 
            autoComplete="off" 
            onChange={(e) => handleChange(e)}
            required>
          </input>
        </div>

        <button type="submit" className="login-btn login-input">Login</button>
      </form>
    </div>
  )
}

export default Login;
