import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Loading from "./Loading";
import { saveToken } from "../utils/utils.js"
import "../styles/login.css"
import bookedLogo from "../assets/booked.png"
import {Snackbar, Alert} from "@mui/material";

const Login = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState({
    message: "",
    status: ""
  });

  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false)
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    let {name, value} = e.target;

    setCredentials({
      ...credentials,
      [name] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    axios({
      method: "post",
      url: "/auth/login",
      data: credentials,
      withCredentials: true
    })
    .then(res => {
      setLoading(false);
      saveToken(res.data.accessToken);
      navigate("/");
      setCredentials({
        username: "",
        password: ""
      });
    })
    .catch(err => {
      console.log(err)
      if(err.response) {
        if(err.response.status === 401 || err.response.status === 404) {
          setError({
          message: "Invalid user credentials.",
          status: err.response.status
          })
        } else {
          setError({
            message: "Error in Server. Try again later.",
            status: err.response.status
          });
        }
      } else {
        setError({message: "An error occured. Please try again later."})
      }
      setLoading(false);
      setOpenSnackbar(true);
      setCredentials({
        username: "",
        password: ""
      });
    });


  }

  return (
    <>
      <div className="login-section">
        <img src={bookedLogo} alt="booked-logo"/>
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
          <button type="submit" className="login-btn login-input">{loading ? <Loading /> : "Login"}</button>
        </form>
      </div>
      {openSnackbar && 
          <Snackbar open={openSnackbar} autoHideDuration={5000} onClose={handleCloseSnackbar}>
            <Alert onClose={handleCloseSnackbar} variant="filled" severity="error" sx={{ width: '100%' }}>
              {`${error.message} (Error ${error.status})`}
            </Alert>
          </Snackbar>
        }
    </>
  )
}

export default Login;
