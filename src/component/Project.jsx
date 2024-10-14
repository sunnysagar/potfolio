import React from 'react';
import './Project.css';

const Projects = () => (
  <div className="section projects">
    <h2>Projects</h2>
   
    <div className="project-item">
    <div className='title'>
      <h3>Rentify - a property application</h3>
      <a href="http://github.com/sunnysagar/Rentify">Git Hub</a>
      </div>
      
      <p>Rentify is a property management application that enables sellers to list and update their 
            properties while allowing buyers to browse available listings. The platform features user 
            authentication, role-based access control, and secure API endpoints to ensure only authorized sellers 
            can modify property details. Real-time updates are facilitated through WebSocket technology, 
            enhancing user experience. Built with React.js for the frontend and Java Spring Boot for the backend, 
            Rentify provides a streamlined, secure, and user-friendly solution for the rental market.</p>
    </div>
    <div className="project-item">
    <div className='title'>
    <h3>Mental Health Care</h3>
    <a href="https://github.com/sunnysagar/MentalHealthCare">Git Hub</a>
    </div>
     
      <p>The Mental Health Care App is an Android application developed using Kotlin and Java for managing and improving users' 
        mental well-being. The app monitors signs of depression and provides a holistic set of features designed to support 
        mental health. Users are guided through personalized tasks, medical reports, yoga and exercise suggestions, 
        as well as online resources like a music player and consultation with a doctor. Firebase serves as the backend database, 
        offering real-time updates, storage, and authentication.</p>
    </div>
  </div>
);

export default Projects;
