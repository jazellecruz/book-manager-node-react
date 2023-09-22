import { Navigate } from "react-router-dom";
import {isUserAuthenticated} from "../utils/utils";

const ProtectedRoute = ({component}) => {
  return (
    isUserAuthenticated() ?  <Navigate to="/login" /> : component
    // isUserAuthenticated() ? component : <Navigate to="/login" />
  )
}

export default ProtectedRoute
