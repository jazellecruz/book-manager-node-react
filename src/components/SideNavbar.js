import { Link } from "react-router-dom";

function SideNavbar() {
  return (
    <>
      <p><Link to="/library">Library</Link></p>
      <p><Link to="categories">Categories</Link></p>
    </>
   
  );
}

export default SideNavbar;