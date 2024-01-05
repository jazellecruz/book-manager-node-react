import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Library from "./Library";
import Login from "./Login";
import Error from "./Error";
import ProtectedRoute from "./ProtectedRoute";
import axios from "axios";
import "../styles/global.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const verifyToken = async () => {
    try{
      let res = await axios({url: "/auth/verify", withCredentials: true});
      if(res.status === 200) {
        setIsAuthenticated(true);
      }
    } catch(err) {
      if (err.response.status === 401) {
        return navigate("/login");
      } 
      
      return navigate("/error");
    }
  }

  useEffect(() => { 
    verifyToken(); 
  }, []);

  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Navigate to="library" />  } />
        <Route path="login" element={<Login />} />
        <Route path="login" 
          element={<ProtectedRoute component={<Login />} isAuthneticated={isAuthenticated}/> } />
        <Route path="error" element={<Error />} />
        <Route path="library" element={<Library />} />
      </Routes>
    </main>               
  );
}

export default App;


