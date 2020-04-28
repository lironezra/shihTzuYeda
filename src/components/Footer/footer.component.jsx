import React from 'react';

import FacebookIcon from '../../assets/icons/facebook.png';

import './footer.styles.scss';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="copyrigth-area">
                <p><span>&copy;</span> שיצוידע כל הזכויות שמורות.</p>
                <div className="social-media-area">
                    <a 
                        href="https://www.facebook.com/groups/348143908883240/?ref=bookmarks" 
                        target="_blank"
                        rel="noopener noreferrer">
                        <img src={FacebookIcon} alt="facebook" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;