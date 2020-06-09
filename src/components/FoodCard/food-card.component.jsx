import React from "react";
import PropTypes from "prop-types";

import "./food-card.styles.scss";

const FoodCard = ({ image, name }) => {
  return (
    <div className="food-card-container">
      <div className="img">
        <img src={image} alt="card" />
      </div>
      <div className="food-title">
        <p>{name}</p>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default FoodCard;
