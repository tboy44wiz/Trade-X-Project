import React from 'react';

import LeftDrawer from "./LeftDrawer";
import MainContainer from "./MainContainer";

function BodyContainer(props) {
    return (
        <div className="body-container">
            <LeftDrawer />
            <MainContainer />
        </div>
    );
}

export default BodyContainer;