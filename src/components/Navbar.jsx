import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar bg-white shadow">
      <ul className="flex gap-2">
        <li className="nav_list"><Link to="/Placement_Home"></Link></li>
        <li className="nav_list"><Link to="/project/ecommerce"></Link></li>
        <li className="nav_list"><Link to="/project/ExpenseTrackerApplication"></Link></li>
        <li className="nav_list"><Link to="/project/StudentInformationSystem(SIS)"></Link></li>
        <li className="nav_list"><Link to="/project/SocialMediaDashboard"></Link></li>
        <li className="nav_list"><Link to="/project/TaskManagementSystem"></Link></li> 
        <li className="nav_list"><Link to="/project/RestaurantBookingWebsite"></Link></li>
        <li className="nav_list"><Link to="/project/OnlineQuizApplication"></Link></li>
        <li className="nav_list"><Link to="/project/PetAdoptionPlatform"></Link></li>
        <li className="nav_list"><Link to="/project/RealEstateListingWebsite"></Link></li>
        <li className="nav_list"><Link to="/project/AppointmentSchedulingApp"></Link></li>

        
        <li className="nav_list"><Link to="/tech"></Link></li>
        <li className="nav_list"><Link to="/Developer"></Link></li>  
        {/* <li><Link to="/Logos">Companies</Link></li> */}
      </ul>
    </nav>
  );
}
