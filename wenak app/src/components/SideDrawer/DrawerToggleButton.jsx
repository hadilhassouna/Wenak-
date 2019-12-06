import React from 'react';

import './DrawerToggleButon.css';

class DrawerToggleButton extends React.Component {
render() {
    return( 
    <button className="toggle-button">
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />

    </button>
    );
}
}

export default DrawerToggleButton;
