import React from 'react';

import './backdrop.styles.scss';

const Backdrop = ({ click }) => (
    <div className='backdrop' onClick={click}/>
);

export default Backdrop;