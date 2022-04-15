import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div>
                <div className='logo'>

                </div>
                <div className='manu'>
                    <NavLink to="/">Home</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;