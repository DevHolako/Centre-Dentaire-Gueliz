import { Link } from "react-router-dom";
import dashboard from "@assets/asied/dashboard.svg";
import users from "@assets/asied/users.svg";
function NavAdmin() {
  return (
    <>
      <div className="nav_item">
        <Link to="/panel">
          <img src={dashboard} alt="dash_ico" className="nav-icon" />
        </Link>
        <Link to="/panel" className="nav-text">
          Dashboard
        </Link>
      </div>
      <div className="nav_item">
        <Link to="users">
          <img src={users} alt="users_ico" className="nav-icon" />
        </Link>
        <Link to="users" className="nav-text">
          Utilisateurs
        </Link>
      </div>
    </>
  );
}

export default NavAdmin;
