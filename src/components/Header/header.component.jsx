import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import UserLogo from '../../assets/icons/user.png';
import DrawerToggleButton from '../SideDrawer/drawer-toggle-button.component';

import './header.styles.scss';

const Header = ({ drawerClickHandler }) => {
  return (
    <header className='header-container'>
      <div className='side-menu-button'>
        <DrawerToggleButton click={drawerClickHandler} />
      </div>
      <Link to='/signin' className='login-user-link'>
        <img src={UserLogo} alt='user' />
        כניסה
      </Link>
      <div className='top-wrapper'>
        <img
          src='https://res.cloudinary.com/dwylnsnmk/image/upload/q_auto/v1589973927/shih-tzu-yeda/app-logo_wx5n43.png'
          alt='app-logo'
        />
        <h1>שיצוידע - לאוהבי הגזע - האתר הרשמי</h1>
      </div>
      <div className='botom-wrapper'>
        <nav>
          <div className='nav-content'>
            <ul>
              <li>
                <NavLink to='/shihTzuYeda' activeClassName='is-active'>
                  בית
                </NavLink>
              </li>
              <li>
                <NavLink to='/about-us' activeClassName='is-active'>
                  קצת עלינו
                </NavLink>
              </li>
              <li>
                <NavLink to='/team-events' activeClassName='is-active'>
                  אירועים
                </NavLink>
              </li>
              <li className='dropdown'>
                <NavLink to='/recomendations' activeClassName='is-active'>
                  ההמלצות שלנו
                </NavLink>
                <div className='dropdown-content'>
                  <a
                    className='link'
                    href='https://www.w3schools.com/howto/howto_css_dropdown.asp'
                  >
                    ספרים מומלצים
                  </a>
                  <a
                    className='link'
                    href='https://www.w3schools.com/howto/howto_css_dropdown.asp'
                  >
                    מוצרי טיפוח
                  </a>
                  <a
                    className='link'
                    href='https://www.w3schools.com/howto/howto_css_dropdown.asp'
                  >
                    אוכל מומלץ
                  </a>
                </div>
              </li>
              {/* <li>
                <NavLink to="/food" activeClassName="is-active">
                  אוכל
                </NavLink>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
