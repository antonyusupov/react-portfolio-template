import React from 'react';
import './features.css';
import {MdDesignServices, MdOutlineDraw, MdOutlineBrandingWatermark, MdArrowRightAlt} from 'react-icons/md';

const Features = () => {
  return (
    <div className='features-main_container'>
      <div className='features-bottom_element'></div>
      <div className='features-content_container'>
        <div className='features-jobs_container'>
          <div className='features-job_one'>
            <p>
              <MdDesignServices />
            </p>
            <h3>UI Design</h3>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor animi porro voluptates fugiat cum.</span>
            <small>know more <MdArrowRightAlt /> </small>
          </div>
          <div className='features-job_two'>
            <p>
              <MdOutlineDraw />
            </p>
            <h3>Product Design</h3>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur expedita praesentium optio maxime.</span>
            <small>know more <MdArrowRightAlt /></small>
          </div>
          <div className='features-job_three'>
            <p>
              <MdOutlineBrandingWatermark />
            </p>
            <h3>Branding</h3>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nemo magni quidem incidunt maiores.</span>
            <small>know more <MdArrowRightAlt /></small>
          </div>
        </div>
        <div className='features-done_container'>
          <div className='features-exp_container'>
            <h4>12</h4>
            <span>years experience</span>
          </div>
          <div className='features-about_designer end'>
            <div className='about-designer'>
              <h5>60+</h5>
              <p>Clients</p>
            </div>
            <div className='about-designer'>
              <h5>08</h5>
              <p>Years Industry</p>
            </div>
            <div className='about-designer'>
              <h5>120+</h5>
              <p>Completed Projects</p>
            </div>
            <div className='about-designer'>
              <h5>10</h5>
              <p>Achievements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features;