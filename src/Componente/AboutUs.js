import React from 'react';
import { useNavigate } from 'react-router-dom';
import poza from "../Assets/logo bun-fotor-bg-remover-20231130185051.png";
import "../Styles/AboutUs.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pozabirou from '../Assets/pozabiroubuna.jpg';



const AboutUs = () => {
  const navigate = useNavigate();
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
  const handleHome=()=>{
    navigate('/')
  };
  return (
    <div className='containerAu'>
    <div className='HeaderAboutUS'>
    <button onClick={handleHome} style={{background:'transparent'}}>
        <div className='LogoContainer'>
          <img src={poza} alt="Logo" />
          <span className='span'>Cnidaria</span>
        </div>
        </button>
      <div className='ButtonsContainer'>
          <button onClick={handleSolutions}>Solutions</button>
          <button onClick={handlePortofolio}>Apps</button>
          <button onClick={handleContact}>Contact</button>
          <button onClick={handleAboutus}>About us</button>
        </div>
    </div>
    <div className='content'>
        <img src={pozabirou} alt="pozabirou" />
      <div className='p1p2-container'>
        <div className='p1'>
          Cnidaria IT Services was founded in 2023 with a passion for bringing innovation and excellence to the world of IT services. At the time of its establishment, we started with a clear vision to transform how people interact with technology by providing advanced and personalized digital solutions.
        </div>
        <div className='p2'>
          Our mission is to deliver high-quality IT solutions that address the needs and challenges of an ever-changing digital world. With a future-focused vision, we aim to develop revolutionary applications that redefine industry standards and bring constant innovation.
        </div>
      </div>
      <h1 className='pageTitle'>ABOUT US</h1>
    </div>
    <div className='footer'>
      <div className='footer-left'>
        <button><FontAwesomeIcon icon={['fab', 'facebook']} /> Facebook</button>
        <button><FontAwesomeIcon icon={['fab', 'instagram']} /> Instagram</button>
        <button><FontAwesomeIcon icon={['fab', 'linkedin']} /> LinkedIn</button>
      </div>
      <div className='footer-right'>
        <h3 className='titlunews'>JOIN OUR NEWSLETTER</h3>
        <input type='text' placeholder='Enter your email' />
        <button>Subscribe</button>
      </div>
    </div>
  </div>
   
  )
}

export default AboutUs