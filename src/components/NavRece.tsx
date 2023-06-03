import { Link } from "react-router-dom";
import dashboard from "@assets/asied/dashboard.svg";
import users from "@assets/asied/users.svg";
function NavRece() {
  return (
    <>
      <div className="nav_item">
        <Link to="/dashboard">
          <img src={dashboard} alt="dash_ico" className="nav-icon" />
        </Link>

        <Link to="/dashboard" className="nav-text">
          dashboard
        </Link>
      </div>
      <div className="nav_item">
        <Link to="patients">
          <img src={users} alt="users_ico" className="nav-icon" />
        </Link>
        <Link to="patients" className="nav-text">
          Patients
        </Link>
      </div>
    </>
  );
}

export default NavRece;
