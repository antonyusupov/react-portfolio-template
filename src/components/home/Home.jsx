import React from 'react';
import './home.css';
import designerPhoto from '../../assets/designer.png';

const Home = () => {
  return (
    <div className='home-main_container'>
      <div className='home-image_container'>
        <img src={designerPhoto} alt='designer'/>
      </div>
      <div className='home-content_container'>
        <span>Hello I'm Jane</span>
        <h1>Visual Desiger</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore quis explicabo, aut ut hic rerum! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        <button>About Me</button>
      </div>
    </div>
  )
}

export default Home;