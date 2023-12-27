import React from 'react';
import '../Styles/Contact.css';
import poza from "../Assets/logo bun-fotor-bg-remover-20231130185051.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
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
    <div className='containerContact'>
      <div className='HeaderAboutUS'>
    <button onClick={handleHome} style={{background:'transparent'}}>
        <div className='LogoContainer'>
          <img src={poza} alt="Logo" />
          <span className='span'>Cnidaria</span>
        </div>
        </button>
      <div className='ButtonsContainer'>
          <button onClick={handleSolutions}>News</button>
          <button onClick={handlePortofolio}>Apps</button>
          <button onClick={handleContact}>Contact</button>
          <button onClick={handleAboutus}>About us</button>
        </div>
    </div>
      <div className='continutContact'>
        <div className='left-content'>
          <h1>Contact Us</h1>
          <p>Need to get in touch with us? Either fill out the form with your inquiry or find the department email you'd like to contact below.</p>
        </div>
        <div className='right-content'>
          <div className='form-container'>
            <form>
              <div className='form-group'>
                <label htmlFor='firstName'>First Name</label>
                <input type='text' id='firstName' name='firstName' />
              </div>
              <div className='form-group'>
                <label htmlFor='lastName'>Last Name</label>
                <input type='text' id='lastName' name='lastName' />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' />
              </div>
              <div className='form-group'>
                <label htmlFor='inquiry'>What can we help you with?</label>
                <textarea id='inquiry' name='inquiry'></textarea>
              </div>
              <button type='submit'>Submit</button>
            </form>
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

export default Contact;
