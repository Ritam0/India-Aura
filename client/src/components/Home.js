import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import './Home.css';
import tour_home from "./image/home_tour.png";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000); 
    }, []);

    return (
        <div>
        {isLoading ? (
            <div className="preloader-container">
                <div className="preloader">
                    <div className="preloader-ring"></div>
                </div>
            </div>
        ) : (
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
                        <NavLink className="Dream_tour_navlink" to="/Dream_tour">
                            <button className="button" type="submit">
                                <span className="button-content">Dream Tourism</span>
                            </button>
                        </NavLink>
                    </section>
                </section>
                <section id='right_sec'>
                    <img src={tour_home} alt="pic" />
                </section>
            </main>

            </div>
      )}
    </div>
    );
}

export default Home;
