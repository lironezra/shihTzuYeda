import React from 'react';

import AppLogo from '../../assets/images/app-logo.png';

import './header.styles.scss';

const Header = () => {
    return (
        <header className="header-container">
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
                            <li>המלצות</li>
                            <li>אוכל</li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;