import { Link } from "react-router-dom";
import dashbord from "@assets/asied/dashbord.svg";
import users from "@assets/asied/users.svg";
function NavRece() {
  return (
    <>
      <div className="nav_item">
        <Link to="/dashbord">
          <img src={dashbord} alt="dash_ico" className="nav-icon" />
        </Link>

        <Link to="/dashbord" className="nav-text">
          Dashbord
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
