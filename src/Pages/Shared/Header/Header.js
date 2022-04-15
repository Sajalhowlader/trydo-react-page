import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../../../imges/logo-light.png'
import './Header.css'
const Header = () => {
    return (
        <nav style={{ background: "black" }}>
            <div className='logo-menu-container'>
                <div className='logo'>
                    <img src={image} alt="" />
                </div>
                <div className='menu-container'>
                    <NavLink to="/home" className={({ isActive }) => isActive ? "isActive" : "link"}> Home </NavLink>

                    <NavLink to="/services" className={({ isActive }) => isActive ? "isActive" : "link"}> Services</NavLink>

                    <NavLink to="/about" className={({ isActive }) => isActive ? "isActive" : "link"}> About</NavLink>

                    <NavLink to="/portfolio" className={({ isActive }) => isActive ? "isActive" : "link"}> Portfolio</NavLink>

                    <NavLink to="/team" className={({ isActive }) => isActive ? "isActive" : "link"}> Team</NavLink>

                    <NavLink to="/blog" className={({ isActive }) => isActive ? "isActive" : "link"}> Blog</NavLink>

                    <NavLink to="/contact" className={({ isActive }) => isActive ? "isActive" : "link"}> Contacts</NavLink>
                    <div className='sing-in-up-container'>
                        <button className="up-in">Sing up</button>
                        <button className="up-in">Sing in</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;