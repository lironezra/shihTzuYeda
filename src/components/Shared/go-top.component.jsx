import React, { useState, useEffect } from 'react';

import ArrowUp from '../../assets/images/up-arrow.png';

import './go-top.styles.scss';


const GoTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        document.addEventListener("scroll", () => {
          toggleVisibility();
        });
    })

    const toggleVisibility = () => {
        if (window.pageYOffset > 170) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    }

    const renderGoTopIcon = () => {
        if (isVisible) {
            return (
                <div className="go-top" onClick={scrollToTop}>
                    <img src={ArrowUp} alt="arrow" />
                </div>
            )
        }
    }
     
    return (
        <>
            {renderGoTopIcon()}
        </>
    );
};

export default GoTop;