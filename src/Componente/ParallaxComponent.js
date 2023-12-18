import React, { useState, useEffect } from 'react';
import "../Styles/ParallaxComponent.css";
import poza from "../Assets/logo bun-fotor-bg-remover-20231130185051.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from "../Assets/casti.png";
import { useNavigate } from 'react-router-dom';
const ParallaxComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  const handlePortofolio = () => {
    navigate('/Portofolio');
  };
  const handleContact = () => {
    navigate('/Contact');
  };
  const handleSolutions = () => {
    navigate('/Solutions');
  };
  const handleAboutus = () => {
    navigate('/AboutUs');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='Container'>
      <div className='Header'>
        <div className='LogoContainer'>
          <img src={poza} alt="Logo" />
          <span className='span'>Cnidaria</span>
        </div>
        <div className='ButtonsContainer'>
          <button onClick={handleSolutions}>Solutions</button>
          <button onClick={handlePortofolio}>Apps</button>
          <button onClick={handleContact}>Contact</button>
          <button onClick={handleAboutus}>About us</button>
        </div>
      </div>
      <div className="BottomText" style={{ top: `${scrollPosition * 0.5}px` }}>
        <h1>Developing Software,</h1>
        <h2>Delivering Success.</h2>
        <h3>↓  Scroll for more</h3>
      </div>
      <button className='assistancebutton'>
  <img src={icon} alt="Logo" style={{ width: '40px', height: '40px' }} />
</button>
<div className='restulhomepage'>
<div className="VerticalLineContainer">
      <svg height="400" width="100%">
        <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="white" strokeWidth="4" />
        <circle cx="50%" cy="10%" r="10" fill="transparent" stroke="white" strokeWidth="4" />
        <circle cx="50%" cy="90%" r="10" fill="transparent" stroke="white" strokeWidth="4" />
      </svg>
    </div>
    <div class="mac-window">
    <div class="title-bar">
      <div class="window-title"></div>
      <div class="window-controls">
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
    <div class="content">
      <p style={{color:'white'}}>- Web Development: From responsive websites to robust web applications, we craft solutions that drive your online success.<br/>
      <br/>
- Custom Software Development: Tailored software solutions designed to streamline your business processes and enhance efficiency.<br/>
<br/>
- UI/UX Design: Engaging and user-friendly designs that create memorable and positive experiences for your audience.<br/>
<br/>
- IT Consulting: Expert advice and strategic insights to help you make informed decisions in the ever-evolving tech landscape.</p>
    </div>
  </div>
  <div className="VerticalLineContainer">
      <svg height="400" width="100%">
        <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="white" strokeWidth="4" />
        <circle cx="50%" cy="10%" r="10" fill="transparent" stroke="white" strokeWidth="4" />
        <circle cx="50%" cy="90%" r="10" fill="transparent" stroke="white" strokeWidth="4" />
      </svg>
    </div>
    <div class="mac-window">
    <div class="title-bar">
      <div class="window-title"></div>
      <div class="window-controls">
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
    <div class="content">
      <p style={{color:'white',textAlign:'center'}}>
        <br/>
        <br/>
        <br/>
        At the core of each project lies a dedicated and talented team. Our specialists in programming, design, and IT consulting are motivated by the desire to create quality products and exceed client expectations</p>
    </div>
  </div>
  <div className="VerticalLineContainer">
      <svg height="400" width="100%">
        <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="white" strokeWidth="4" />
        <circle cx="50%" cy="10%" r="10" fill="transparent" stroke="white" strokeWidth="4" />
        <circle cx="50%" cy="90%" r="10" fill="transparent" stroke="white" strokeWidth="4" />
      </svg>
    </div>
    <div class="mac-window">
    <div class="title-bar">
      <div class="window-title"></div>
      <div class="window-controls">
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
    <div class="content">
      <p style={{color:'white', textAlign:'center'}}>
      <br/>
        <br/>
        <br/>
        We are proud to collaborate with strategic partners and build strong relationships in the IT industry. Through our partnerships, we bring cutting-edge technologies and efficient solutions to our projects.</p>
    </div>
  </div>
    </div>
    </div>
  );
};

export default ParallaxComponent;