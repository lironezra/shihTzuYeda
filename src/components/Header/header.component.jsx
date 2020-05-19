import React from "react";
import { NavLink } from "react-router-dom";

import UserLogo from "../../assets/icons/user.png";
import DrawerToggleButton from "../SideDrawer/drawer-toggle-button.component";

import "./header.styles.scss";

const Header = ({ drawerClickHandler }) => {
  return (
    <header className="header-container">
      <div className="side-menu-button">
        <DrawerToggleButton click={drawerClickHandler} />
      </div>
      <div className="login-user-link">
        <img src={UserLogo} alt="user" />
        <span>כניסה</span>
      </div>
      <div className="top-wrapper">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/shih-tzu-yeda.appspot.com/o/app-logo.png?alt=media&token=6ea728e1-dd3f-4a8a-b6f5-04bc52d9f647"
          alt="app-logo"
        />
        <h1>שיצוידע - לאוהבי הגזע - האתר הרשמי</h1>
      </div>
      <div className="botom-wrapper">
        <nav>
          <div className="nav-content">
            <ul>
              <li>
                <NavLink to="/shihTzuYeda" activeClassName="is-active">
                  בית
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us" activeClassName="is-active">
                  קצת עלינו
                </NavLink>
              </li>
              <li className="dropdown">
                <NavLink to="/recomendations" activeClassName="is-active">
                  ההמלצות שלנו
                </NavLink>
                <div className="dropdown-content">
                  <a
                    className="link"
                    href="https://www.w3schools.com/howto/howto_css_dropdown.asp"
                  >
                    ספרים מומלצים
                  </a>
                  <a
                    className="link"
                    href="https://www.w3schools.com/howto/howto_css_dropdown.asp"
                  >
                    מוצרי טיפוח
                  </a>
                  <a
                    className="link"
                    href="https://www.w3schools.com/howto/howto_css_dropdown.asp"
                  >
                    אוכל מומלץ
                  </a>
                </div>
              </li>
              <li>
                <NavLink to="/food" activeClassName="is-active">
                  אוכל
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
