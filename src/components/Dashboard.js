import SideNavbar from "./SideNavbar";
import Library from "./Library";
import Categories from "./Categories";
import {Routes, Route, Outlet} from "react-router-dom"

function Dashboard() {
  return(
    <>
      <SideNavbar />
      <Routes>
        <Route path="/" element={<Library />}/>
        <Route path="/categories" element={<Categories />}/>
      </Routes>
      <Outlet />
    </>
  );
}

export default Dashboard;
