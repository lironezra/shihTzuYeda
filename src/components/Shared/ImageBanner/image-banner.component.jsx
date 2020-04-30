import React from 'react';
import PropTypes from 'prop-types';

import './image-banner.styles.scss';

const ImageBanner = ({ image }) => {
    return (
        <div className="image-banner-wrapper" 
        style={{backgroundImage: `url(${image})`}}
        ></div>
    );
};

ImageBanner.propTypes = {
    image: PropTypes.string.isRequired
}

export default ImageBanner;