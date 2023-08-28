import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar'
// import Services from './Services'
import Footer from './Footer'
import './Home.css';
import tour_home from "./image/home_tour.png"
import { useState,useEffect } from 'react';

const Home = () => {
    
    return (
        <div>
            <Navbar />

            <main id='home_main'>

                <section id='left_sec'>
                    <section id='home_heading'>
                        Indian <span> Tourism </span >
                    </section>
                    <section id='home_desc'>
                    Explore India's Rich Tapestry: Unveil Majestic Landscapes, Timeless Heritage, and Culinary Delights on Your Journey of a Lifetime.
                    </section>
                    <section id='home_left_btn'>

                        {/* <button className="button">
                            <NavLink  to="/doctors">Our Doctors</NavLink>
                        </button> */}
                        {/* <button className='doctors_btn'><NavLink className="doctors_navlink" to="/doctors">Our Doctors</NavLink></button> */}
                        <NavLink className="doctors_navlink" to="/doctors">
                            <button className="button" type="submit" >
                                <span className="button-content">Dream Tourism</span>
                            </button>
                        </NavLink>

                    </section>

                </section>
                <section id='right_sec'>
                    <img src={tour_home} alt="pic" />
                </section>


            </main>


            {/* <Services /> */}
            <Footer />

        </div>
    )
}

export default Home 