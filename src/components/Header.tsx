import { Link } from "react-router-dom";
import "@styles/header/index.css";
import logo from "@assets/logo.png";
import icoSettings from "@assets/asied/settings.svg";
import icoLogout from "@assets/asied/logout.svg";
import NavRece from "./NavRece";
import NavAdmin from "./NavAdmin";

function Header() {
  const role = localStorage.getItem("role");
  return (
    <>
      <aside className="aside-bar">
        <img src={logo} alt="logo" id="logo" className="logo" />
        <nav className="nav-bar">
          {role == "rece" ? <NavRece /> : <NavAdmin />}
        </nav>
        <div className="settings">
          <div className="setting_item">
            <Link to="setting">
              <img src={icoSettings} alt="icoSettings" className="nav-icon" />
            </Link>
            <Link to="setting" className="nav-text">
              Settings
            </Link>
          </div>
          <div className="setting_item">
            <Link to="/">
              <img src={icoLogout} alt="icoLogout" className="nav-icon" />
            </Link>
            <Link
              to="/"
              onClick={() => localStorage.clear()}
              className="nav-text"
            >
              Logout
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Header;
