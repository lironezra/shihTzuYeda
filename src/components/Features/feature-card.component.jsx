import React from 'react'

import './feature-card.styles.scss';

const FeatureCard = ({ icon, headerText, descText }) => {
    return (
        <div className="feature-card">
            <div className="card-icon">
                <img src={icon} alt="salon" />
            </div>
            <div className="card-content">
                <h2>{headerText}</h2>
                <p>{descText}</p>
            </div>
            <div className="go-to-content">
                <button>קרא עוד >></button>
            </div>
        </div>
    );
};

export default FeatureCard;