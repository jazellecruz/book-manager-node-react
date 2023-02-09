import { Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "../Dashboard"

function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Navigate replace to="dashboard/library" />} />
      <Route path="dashboard/*" element={<Dashboard />} />
    </Routes>
  );
}

export default AppRoutes;