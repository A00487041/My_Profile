// src/components/AboutMe.js
import React from 'react';
import AboutMeImg from './assets/AboutMe1.png';


const AboutMe = () => {
  return (
  <div className="card1">
    <div className='img-and-name'>
      <img
        src= {AboutMeImg} // Replace with an image URL of Halifax if available
        alt="Halifax, NS"
        className="image"
      />
      <h1 className='Name'>Hi, I'm Thoufiq</h1>
    </div>
    <div className = "para">
      <p>I'm an International Student pursuing <span className="highlight">Masters in Computing and Data Analytics at SMU</span><br /><br /></p>
      <p>I chose to pursue MCDA to deepen my expertise in the world of data, driven by a strong passion for Data Engineering and Database Design. I’m excited to leverage this opportunity to build a rewarding career in Canada and make a meaningful impact through data-driven solutions.</p>
    </div>
  </div>
  );
};

export default AboutMe;
