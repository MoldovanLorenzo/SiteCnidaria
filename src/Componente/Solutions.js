
import React from 'react';
import '../Styles/Solutions.css';
import poza from "../Assets/logo bun-fotor-bg-remover-20231130185051.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const Solutions = () => {
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
    <div className='container'>
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
      <div className='contents'>
        <h className='titlumare'>Our <h className='soluti'>solutions</h> for your <h className='busines'>business</h></h>
        <div className='row'>
          <div className='container-box'>
            <h className='box-title'>Software Development</h>
            <p>Custom application development for various platforms (web, mobile, desktop). Development of business management software (ERP), accounting software, etc.</p>
          </div>
          <div className='container-box'>
            <h className='box-title'>Web Design and Development</h>
            <p>Creation of custom websites. Development of e-commerce platforms and online stores.</p>
          </div>
          <div className='container-box'>
            <h className='box-title'>IT Consulting</h>
            <p>Consultation on IT strategies and digital transformation. Assessment of IT security and infrastructure.</p>
          </div>
        </div>
        <div className='row'>
          <div className='container-box'>
            <h className='box-title'>Cloud Services</h>
            <p>Implementation of cloud storage and computing solutions. Migration to cloud platforms.</p>
          </div>
          <div className='container-box'>
            <h className='box-title'>Maintenance and Support Services</h>
            <p>Preventive and corrective maintenance for IT infrastructure. Technical support and user assistance.</p>
          </div>
          <div className='container-box'>
            <h className='box-title'>Software Testing Services</h>
            <p>Automated and manual software testing. Quality assurance for software products.</p>
          </div>
        </div>
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
  );
}

export default Solutions;
