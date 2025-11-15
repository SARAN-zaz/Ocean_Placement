import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/Placement_home">Home</Link></li>
        <li><Link to="/E_commerce">Project Modules</Link></li>
        <li><Link to="/tech">Interview Prep</Link></li>
        <li><Link to="/Developer">Developer Section</Link></li>


      </ul>
    </nav>
  )
}



