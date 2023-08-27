import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './Home.css';
import tour_home from "./image/home_tour.png";

const Home = () => {
    const [textIndex, setTextIndex] = useState(0);
    const texts = ["Aura", "Tourism"];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Navbar />

            <main id='home_main'>
                <section id='left_sec'>
                    <section id='home_heading'>
                        India <span>{texts[textIndex]}</span>
                    </section>
                    <section id='home_desc'>
                        Explore India's Rich Tapestry: Unveil Majestic Landscapes, Timeless Heritage, and Culinary Delights on Your Journey of a Lifetime.
                    </section>
                    <section id='home_left_btn'>
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
            {/* <Footer /> */}
        </div>
    )
}

export default Home;
