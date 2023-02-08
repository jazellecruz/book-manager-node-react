import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard"
import Library from "../Library"

function AppRoutes() {
  return(
    <Routes>
      <Route path="dashboard/*" element={<Dashboard />} />
    </Routes>
  );
}

export default AppRoutes;