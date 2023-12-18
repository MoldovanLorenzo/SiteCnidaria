import React from 'react';
import '../Styles/Coral.css';
import poza from "../Assets/logo bun-fotor-bg-remover-20231130185051.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
function Coral() {
  return (
    <div className='containerCoral'>
      <div className='HeaderCoral'>
        <div className='LogoContainer'>
          <img src={poza} alt="Logo" />
          <span className='span'>Coral</span>
        </div>
      </div>
      <div className='panelCoral'>
        <div className='panelct'>
          <div className='profileSection'>
            <div className='profileImage'></div>
            <div className='profileForm'>
              <label>Username:</label>
              <input type='text' placeholder='Nume' />
              <label>Email:</label>
              <input type='text' placeholder='Email' />
              <label>Password:</label>
              <input type='password' placeholder='Parolă' />
              <button className='orangeButton'>Modify</button>
              <button className='orangeButton'>Delete</button>
            </div>
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
  )
}

export default Coral;
