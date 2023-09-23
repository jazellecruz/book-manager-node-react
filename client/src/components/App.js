import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import {destroyToken} from "../utils/utils"
import AppRoutes from "./Routes/AppRoutes";
import "../styles/global.css";
import "../styles/styles.css";


const App = () => {
  // const navigate = useNavigate();

  // const verifyToken = () => {

  //   axios({
  //     method: "post",
  //     url: "http://localhost:8000/auth/verify",
  //     headers: {
  //       "x-access-token": localStorage.getItem("accessToken")
  //     }})
  //     .then(res => {
  //       if (res.data.status === 200) {
  //         navigate("/dashboard/library")
  //       }
  //     })
  //     .catch(err => {
  //       if(err.response.status === 401 || err.response.status === 404) {
  //         destroyToken();
  //         navigate("/login")
  //       } else if (err.response.status === 500) {
  //         navigate("/error")
  //       }
  //     });
  //   }


  // useEffect(() => {
  //   if(!localStorage.getItem("accessToken") ){
  //     navigate("/login");
  //   } else {
  //     verifyToken();
  //   }
  // }, [])

  return (
    <main>
      <AppRoutes />
    </main>
  );
}

export default App;


