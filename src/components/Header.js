import React from 'react';

import Logo from '../assets/images/logo.png';

function Header(props) {
    return (
        <div className="main-header">
            <div className="brand-wrapper">
                <img src={ Logo } className="brand-wrapper__logo-image" alt="Brand Logo"/>
            </div>
        </div>
    );
}

export default Header;