import { Routes, Route, Navigate } from "react-router-dom";
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
    </Routes>
  );
}

export default AppRoutes;