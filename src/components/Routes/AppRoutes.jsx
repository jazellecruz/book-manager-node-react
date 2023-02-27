import { Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "../Dashboard"
import Login from "../Login";

function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Navigate replace to="dashboard/library" />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard/*" element={<Dashboard />} />
    </Routes>
  );
}

export default AppRoutes;