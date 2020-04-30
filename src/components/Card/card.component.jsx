import React from 'react';
import PropTypes from 'prop-types';

import './card.styles.scss';

const Card = ({ cardName, cardDesc, image }) => {
    return (
        <div className="card">
            <div className="img">
                <img src={image} alt="" />
            </div>
            <div className="card-description">
                <h3>{cardName}</h3>
                <p>{cardDesc}</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    cardName: PropTypes.string.isRequired,
    cardDesc: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default Card;