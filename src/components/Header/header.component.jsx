import React from 'react';

import AppLogo from '../../assets/images/app-logo.png';
import UserLogo from '../../assets/icons/user.png';

import './header.styles.scss';

const Header = () => {
    return (
        <header className="header-container">
            <div className="login-user-link">
                <img src={UserLogo} alt="user" />
                <span>כניסה</span>
            </div>
            <div className="top-wrapper">
                <img src={AppLogo} alt="app-logo" />
                <h1>שיצוידע - לאוהבי הגזע - האתר הרשמי</h1>
            </div>
            <div className="botom-wrapper">
                <nav>
                    <div className="nav-content">
                        <ul>
                            <li>בית</li>
                            <li>קצת עלינו</li>
                            <li className="dropdown">
                                <a href="https://www.w3schools.com/howto/howto_css_dropdown.asp">המלצות</a>
                                {/* <button class="dropbtn">Dropdown</button> */}
                                <div className="dropdown-content">
                                    <a className="link" href="https://www.w3schools.com/howto/howto_css_dropdown.asp">ספרים מומלצים</a>
                                    <a className="link" href="https://www.w3schools.com/howto/howto_css_dropdown.asp">מוצרי טיפוח</a>
                                    <a className="link" href="https://www.w3schools.com/howto/howto_css_dropdown.asp">אוכל מומלץ</a>
                                </div>
                            </li>
                            <li>אוכל</li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;