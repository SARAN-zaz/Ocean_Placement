import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/Placement_home">Home</Link></li>
        <li><Link to="/Placement_about">About</Link></li>
        <li><Link to="/Placement_methodology">Methodology</Link></li>
        <li><Link to="/Placement_student">Students</Link></li>
      </ul>
    </nav>
  )
}



