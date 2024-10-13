import React from "react";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Project";
import Footer from "./ContactFooter";
import './Home.css';

const Home = () =>{
    return(
        <div className="home">
            <header className="header">
                <div className="profile-details">
                <h1>Sunny Sagar</h1>
                <p>Software Developer</p>
                </div>
                
                <div className="profile">
                    <img src="/sunny.jpg" alt="sunny"/>
                </div>
             </header>
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Footer />
        </div>
    );
}

export default Home;