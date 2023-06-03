import { Link } from "react-router-dom";
import dashboard from "@assets/asied/dashboard.svg";
function NavAdmin() {
  return (
    <div className="nav_item">
      <Link to="/admin">
        <img src={dashboard} alt="dash_ico" className="nav-icon" />
      </Link>

      <Link to="/admin" className="nav-text">
        Dashboard
      </Link>
    </div>
  );
}

export default NavAdmin;
