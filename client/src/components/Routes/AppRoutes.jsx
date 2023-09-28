import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import Dashboard from "../Dashboard"
import Library from "../Library";
import Login from "../Login";
import Error from "../Error";

function AppRoutes() {
  return(
    <Routes>
      <Route exact path="/" element={<Navigate to="library" />  } />
      <Route path="login" element={<Login />} />
      <Route path="error" element={<Error />} />
      <Route path="library" element={<Library />} />

      {/* <Route path="library" element={<Library/>} /> */}

      {/* <Route path="/" element={<ProtectedRoute component={<Navigate to="dashboard/library" />} /> } /> */}
      {/* <Route path="dashboard/*" element={<ProtectedRoute component={<Dashboard />} /> } /> */}
    </Routes>
  );
}

export default AppRoutes;