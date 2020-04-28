import React from 'react';

import './spinner.styles.scss';

const Spinner = () => {
    return (
        <div className="loader">
            <div className="ring-2">
                <div className="ball-holder">
                    <div className="ball"></div>
                </div>
            </div>
        </div>
    )
}

export default Spinner;