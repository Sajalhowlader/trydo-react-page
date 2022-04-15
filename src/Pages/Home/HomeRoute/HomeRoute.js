import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeRoute = () => {
    return (
        <div>
            <NavLink to="/products" >All Products</NavLink>
            <NavLink to="/summer" > Summer Products</NavLink>
            <NavLink to="/winter" > Winter Products</NavLink>
        </div>
    );
};

export default HomeRoute;