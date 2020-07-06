import React from "react";

import { NavLink } from "react-router-dom";

import UserLogo from "../../assets/icons/user.png";

import "./side-drawer.styles.scss";

const SideDrawer = ({ visible, closeSideDrawer }) => {
  let drawerClasses = ["side-drawer"];

  if (visible) {
    drawerClasses = ["side-drawer", "visible"];
  }

  return (
    <nav className={drawerClasses.join(" ")}>
      <div className={`login-user-link`}>
        <img src={UserLogo} alt="user" />
        <span>כניסה</span>
      </div>
      <ul>
        <li>
          <NavLink
            className="side-drawer-option"
            activeClassName="is-active"
            to="/shihTzuYeda"
            onClick={closeSideDrawer}
          >
            בית
          </NavLink>
        </li>
        <li>
          <NavLink
            className="side-drawer-option"
            activeClassName="is-active"
            to="/about-us"
            onClick={closeSideDrawer}
          >
            קצת עלינו
          </NavLink>
        </li>
        <li>
          <NavLink
            className="side-drawer-option"
            activeClassName="is-active"
            to="/team-events"
            onClick={closeSideDrawer}
          >
            אירועים
          </NavLink>
        </li>
        <li>
          <NavLink
            className="side-drawer-option"
            activeClassName="is-active"
            to="/recomendations"
            onClick={closeSideDrawer}
          >
            המלצות
          </NavLink>
        </li>
        <li>
          <NavLink
            className="side-drawer-option"
            activeClassName="is-active"
            to="/food"
            onClick={closeSideDrawer}
          >
            אוכל
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
