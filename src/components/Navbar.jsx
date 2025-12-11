import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar bg-white shadow">
      <ul className="flex gap-2">
        <li><Link to="/Placement_Home"></Link></li>
        <li><Link to="/project/ecommerce"></Link></li>
        <li><Link to="/project/ExpenseTrackerApplication"></Link></li>
        <li><Link to="/project/StudentInformationSystem(SIS)"></Link></li>
        <li><Link to="/project/SocialMediaDashboard"></Link></li>
        <li><Link to="/project/TaskManagementSystem"></Link></li> 
        <li><Link to="/project/RestaurantBookingWebsite"></Link></li>
        <li><Link to="/project/OnlineQuizApplication"></Link></li>
        <li><Link to="/project/PetAdoptionPlatform"></Link></li>
        <li><Link to="/project/RealEstateListingWebsite"></Link></li>
        <li><Link to="/project/AppointmentSchedulingApp"></Link></li>

        
        <li><Link to="/tech"></Link></li>
        <li><Link to="/Developer"></Link></li>  
        {/* <li><Link to="/Logos">Companies</Link></li> */}
      </ul>
    </nav>
  );
}
