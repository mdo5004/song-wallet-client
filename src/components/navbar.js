import React from 'react';
import {NavLink} from 'react-router-dom';

export const NavigationBar = () => {
    return (
        <ul className='nav'>
            <li>
                <NavLink activeClassName='active' to='/'>
                    Home
                </NavLink>
                <NavLink activeClassName='active' to='/songs'>
                    Editor
                </NavLink>
                <NavLink activeClassName='active' to='/friends'>
                    Friends
                </NavLink>
            </li>
        </ul>
    )
}