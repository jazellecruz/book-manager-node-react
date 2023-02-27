import { useState } from "react";
import axios from 'axios'

const Login = () => {
  const [credentials, setCredentials] = useState({
    user: "",
    password: ""
  });

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
    })
    .catch(err => console.log(err));

    setCredentials({
      user: "",
      password: ""
    });
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" 
          name="user" 
          value={credentials.user} 
          placeholder="Username or Email"
          autoComplete="off" 
          onChange={(e) => handleChange(e)}>
        </input>
        <br />
        <input type="password" 
          name="password" 
          value={credentials.password} 
          placeholder="Password" 
          autoComplete="off" 
          onChange={(e) => handleChange(e)}>
        </input>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;
