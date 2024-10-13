import React from 'react';
import './About.css';

const About = () => (
  <div className="section about">
    <h2>About Me</h2>
    <div className="about-content">
      <div className="about-professional">
        <h3>Professional</h3>
        <p>
          I am a passionate Full Stack Developer and Mobile App Developer with experience in building web and mobile applications. 
          My skills include working with Java, Spring Boot, React.js, Kotlin, MySQL, and Firebase. I love solving problems and continuously 
          learning new technologies to improve my craft. I have worked at Constituent AI and Technology Pvt. Ltd., where I contributed to 
          developing innovative mobile solutions.
        </p>
      </div>
      <div className="about-personal">
        <h3>Personal</h3>
        <p>
          When I'm not coding, I enjoy reading books, playing video games, and exploring new places. I’m also passionate about fitness and 
          like to maintain a healthy lifestyle through regular exercise. I believe in balancing work and personal life to stay motivated 
          and productive in all aspects.
        </p>
      </div>
    </div>
  </div>
);

export default About;
