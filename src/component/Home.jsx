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
                <h1>Sunny Sagar</h1>
                <p>Full Stack Developer & Mobile App Developer</p>
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