import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/Placement_home">Home</Link></li>
        <li><Link to="/E_commerce">Project Modules</Link></li>
      </ul>
    </nav>
  )
}



