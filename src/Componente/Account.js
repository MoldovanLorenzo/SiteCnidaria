import React, { useState, useEffect } from 'react';
import "../Styles/ParallaxComponent.css";
import poza from "../Assets/logo bun-fotor-bg-remover-20231130185051.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from "../Assets/casti.png";
import { useNavigate } from 'react-router-dom';
import "../Styles/Account.css";
import logo3 from "../Assets/Coral-logos_transparent.png";

function Account() {
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
      const handleAccount= () => {
        navigate('/Account');
      }
  return (
    <div>
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
      <div className='continutAccount'>
        <div className='sectiuneProfil'>
          {/*aici o sa pui imaginea de profil*/}
        <img className='imagineProfil'></img>
        <h2>Hello, </h2>
        {/* aici o sa pui usenameu*/ }
        <h3 style={{marginLeft:10,alignSelf:'center'}}> Louis barosan</h3>
        </div>
        <h1 className='titluemail'>Email</h1>
        {/*aici o sa pui emailu*/}
        <p>louisbarosan@gmail.com</p>
        <button>Change account password</button>
        <h2 className='titluApps'>Apps</h2>
        <img className='logo2' src={logo3} alt='logo3'></img>
        <button style={{color:"red",background:"transparent", fontSize:15,fontWeight:'bold',position:'relative',bottom:40}}>Delete Cnidaria Account</button>
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

export default Account
