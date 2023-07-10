import { Link, useNavigate } from "react-router-dom";
import "@styles/header/index.css";
import logo from "@assets/logo.png";
import icoSettings from "@assets/asied/settings.svg";
import icoLogout from "@assets/asied/logout.svg";
import NavRece from "./NavRece";
import NavAdmin from "./NavAdmin";
import { logout } from "@/api/requests";
import { useState } from "react";
import { Loader } from "@mantine/core";

function Header() {
  const [islogout, setIsLogout] = useState(false);
  const role = localStorage.getItem("role");
  const go = useNavigate();
  const logouthandler = async () => {
    setIsLogout(true);
    await logout();
    setIsLogout(false);
    go("/");
  };
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
              Profil
            </Link>
          </div>
          <div className="setting_item">
            <div onClick={logouthandler}>
              {islogout ? (
                <Loader color="black" size={"sm"} />
              ) : (
                <img src={icoLogout} alt="icoLogout" className="nav-icon" />
              )}
            </div>
            <div onClick={logouthandler} className="nav-text">
              {islogout ? "" : " Déconnexion"}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Header;
