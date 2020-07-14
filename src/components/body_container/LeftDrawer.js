import React from 'react';
import {NavLink} from "react-router-dom";

import MonitorIcon from '../../assets/images/users.png';
import UsersIcon from '../../assets/images/users.png';
import UserIcon from '../../assets/images/user.png';
import ChartIcon from '../../assets/images/users.png';
import LogoutIcon from '../../assets/images/logout.png';

function LeftDrawer(props) {
    return (
        <div className="left-drawer-wrapper">
            <ul>
                <NavLink to="#" activeClassName="selected">
                    <li>
                        <img src={ MonitorIcon } className="hamburger--icon" alt="HamburgerIcon"/>
                        <span>Dashboard</span>
                    </li>
                </NavLink>
                <NavLink to="#" activeClassName="selected">
                    <li>
                        <img src={ UsersIcon } className="hamburger--icon" alt="HamburgerIcon"/>
                        <span>My Account</span>
                    </li>
                </NavLink>
                <NavLink to="#" activeClassName="selected">
                    <li>
                        <img src={ UserIcon } className="hamburger--icon" alt="HamburgerIcon"/>
                        <span>My Events</span>
                    </li>
                </NavLink>
                <NavLink to="#" activeClassName="selected">
                    <li>
                        <img src={ UsersIcon } className="hamburger--icon" alt="HamburgerIcon"/>
                        <span>Nearby Events</span>
                    </li>
                </NavLink>
                <NavLink to="#" activeClassName="selected">
                    <li>
                        <img src={ ChartIcon } className="hamburger--icon" alt="HamburgerIcon"/>
                        <span>Upcoming Events</span>
                    </li>
                </NavLink>
                <NavLink to="#" activeClassName="selected">
                    <li>
                        <img src={ UserIcon } className="hamburger--icon" alt="HamburgerIcon"/>
                        <span>Notifications </span>
                    </li>
                </NavLink>
                <NavLink to="#" activeClassName="selected">
                    <li>
                        <img src={ UserIcon } className="hamburger--icon" alt="HamburgerIcon"/>
                        <span>Settings</span>
                    </li>
                </NavLink>
                <NavLink to="#">
                    <li className="mt-5">
                        <img src={ LogoutIcon } className="hamburger--icon" alt="HamburgerIcon"/>
                        <span>Logout</span>
                    </li>
                </NavLink>
            </ul>
        </div>
    );
}

export default LeftDrawer;