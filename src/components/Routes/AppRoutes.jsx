import { Routes, Route, Navigate,  } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import Dashboard from "../Dashboard"
import Login from "../Login";

function AppRoutes() {
  return(
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<ProtectedRoute component={<Navigate to="dashboard/library" />} /> } />
      <Route path="dashboard/*" element={<ProtectedRoute component={<Dashboard />} /> } />
    </Routes>
  );
}

export default AppRoutes;