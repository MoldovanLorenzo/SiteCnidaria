import React from 'react';
import '../Styles/Portoflio.css';
import poza from "../Assets/logo bun-fotor-bg-remover-20231130185051.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import pozaCoral from "../Assets/Coral-logos.jpeg";
import pozaNutri from "../Assets/NutriVision-logos.jpeg";
import pozaLive from "../Assets/Live Buss-logos.jpeg";

const Portofolio = () => {
  const navigate = useNavigate();

  const handleCoral = () => {
    navigate('/Coral');
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
  const handleHome=()=>{
    navigate('/')
  };

  return (
    <div className='containerPf'>
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
      <div className='container-aplicatii'>
        <button onClick={handleCoral} style={{ background: 'transparent' }}>
          <div className='aplicatie'>
            <img src={pozaCoral} alt="Logo Aplicatie 1"  style={{borderRadius:30}}/>
            <h style={{fontSize:30,fontWeight:'bold',fontStyle:'italic'}}>Coral</h>
          </div>
        </button>
        <button style={{ background: 'transparent' }}>
          <div className='aplicatie'>
            <img src={pozaLive} alt="Logo Aplicatie 2"  style={{borderRadius:30}}/>
            <h style={{fontSize:30,fontWeight:'bold',fontStyle:'italic'}}>Live Buss</h>
          </div>
        </button>
        <button style={{ background: 'transparent' }}>
          <div className='aplicatie'>
            <img src={pozaNutri} alt="Logo Aplicatie 3"  style={{borderRadius:30}}/>
            <h style={{fontSize:30,fontWeight:'bold',fontStyle:'italic'}}>NutriVision</h>
          </div>
        </button>
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
};

export default Portofolio;
