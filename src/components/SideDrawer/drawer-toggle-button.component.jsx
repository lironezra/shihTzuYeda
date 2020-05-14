import React from 'react';

import './drawer-toggle-button.styles.scss' 

const DrawerToggleButton = ({ click }) => (
    <div className='toggle-button' onClick={click}>
        <div className='toggle-button-line' />
        <div className='toggle-button-line' />
        <div className='toggle-button-line' />
    </div>
);

export default DrawerToggleButton;