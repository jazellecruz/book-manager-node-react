import { Link, Outlet } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <p><Link to="/library">Home</Link></p>
      <p><Link to="/profile">Profile</Link></p>
      <Outlet />
    </>
  )
}
