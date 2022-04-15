import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blog from '../../Blog/Blog/Blog';
import OurServices from '../../OurServices/OurServices/OurServices';
import Header from '../../Shared/Header/Header';
import HomeRoute from '../HomeRoute/HomeRoute';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className='home-container'>
                <Header />
                <div className='header-info'>
                    <h1 className='header-title'>ALONE</h1>
                    <p className='header-blog'>Another day has gone.Im still all alone.How could this be.Your not here with me.YOu never said goodbye.Someone tell me why.Did you have to go.And leave my world so cold.Everyday i sit and ask myself.How did love slip away.Something whisper in my ear and says.That your ar not alone.I am here with you.</p>
                    <button className='header-btn'>Explore More</button>
                </div>
            </div >

            <HomeRoute />

        </div>
    );
};

export default Home;