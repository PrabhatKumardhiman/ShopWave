import React from 'react'
import Navbar from './../Navbar';
import ItemsContainer from './../ItemsContainer';
import Footer from './../Footer';
import Carousel from '../Carousel.js';

const HomePage = () => {
    return (
        <div>
            <>
                <Navbar />
                <Carousel/>
                <ItemsContainer />
                <Footer/>
            </>
        </div>
    )
}

export default HomePage
