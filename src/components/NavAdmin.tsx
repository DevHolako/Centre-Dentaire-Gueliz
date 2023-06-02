import { Link } from "react-router-dom";
import dashbord from "@assets/asied/dashbord.svg";
function NavAdmin() {
  return (
    <div className="nav_item">
      <Link to="/admin">
        <img src={dashbord} alt="dash_ico" className="nav-icon" />
      </Link>

      <Link to="/admin" className="nav-text">
        Dashbord
      </Link>
    </div>
  );
}

export default NavAdmin;
