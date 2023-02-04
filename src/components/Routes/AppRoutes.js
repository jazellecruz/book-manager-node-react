import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard"
import Profile from "../Profile"

function AppRoutes() {
  return(
    <Routes>
      <Route path="library/*" element={<Dashboard />}/>
      <Route path="/profile" element={<Profile />}/>
    </Routes>
  );
}

export default AppRoutes;