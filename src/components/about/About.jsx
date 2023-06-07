import React from 'react';
import './about.css';
import projectOne from '../../assets/project1.jpg';
import projectTwo from '../../assets/project2.jpg';
import projectThree from '../../assets/project3.jpg';
import projectFour from '../../assets/project4.jpg';

const About = () => {
  return (
    <div className='about-main_container'>
      <div className='about-featured_projects'>
        <div className='about-featured_projects-content'>
          <h3>featured projects</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus reprehenderit nam consequatur et eius provident.</p>
        </div>
        <div className='about-featured_projects-button'>
          <button>view all</button>
        </div>
      </div>
      <div className='about-projects_display-container'>
        <div className='about-project'>
          <img src={projectOne} alt="project" />
          <h4>boraka</h4>
          <span>know more</span>
        </div>
        <div className='about-project'>
          <img src={projectTwo} alt="project" />
          <h4>art</h4>
          <span>know more</span>
        </div>
        <div className='about-project'>
          <img src={projectThree} alt="project" />
          <h4>designist</h4>
          <span>know more</span>
        </div>
        <div className='about-project'>
          <img src={projectFour} alt="project" />
          <h4>fantom</h4>
          <span>know more</span>
        </div>
      </div>
      <div className='about-background_div'></div>
    </div>
  )
}

export default About;