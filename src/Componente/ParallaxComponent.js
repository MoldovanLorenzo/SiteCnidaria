import React, { useState, useEffect } from 'react';
import "../Styles/ParallaxComponent.css";
import poza from "../Assets/logo bun-fotor-bg-remover-20231130185051.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from "../Assets/casti.png";
import { useNavigate } from 'react-router-dom';
const ParallaxComponent = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loginFormVisible, setLoginFormVisible] = useState(true);
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
  const handleAccount= () => {
    navigate('/Account');
  };
  const handleCustomButtonClick = () => {
    setPopupVisible(true);
    setLoginFormVisible(true);
  };

  const handleSignUpButtonClick = () => {
    setLoginFormVisible(false);
  };

  const handleLoginButtonClick = () => {
    setLoginFormVisible(true);
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
        <div className='AllButtonsContainer'>
  <div className='ButtonsContainer'>
    <button onClick={handleSolutions}>News</button>
    <button onClick={handlePortofolio}>Apps</button>
    <button onClick={handleContact}>Contact</button>
    <button onClick={handleAboutus}>About us</button>
  </div>
  <div className="CustomButtonContainer">
    {/* aici in butonu asa o sa pui imagine dupa ce se logheaza sa apoara imagiea la con*/}
  <button
      className="CustomButton"
      style={{ width: 50, height: 50, borderRadius: 50 }}
      onClick={() => {
        handleCustomButtonClick();
        handleLoginButtonClick();
      }}
    ></button>
    {/*aici pui sa para numele dupa ce se conecteaza useru in loc de textu login*/}
  <p style={{marginLeft:5}}>Login </p>
  </div>
</div>
      </div>
      <div className="BottomText" style={{ top: `${scrollPosition * 0.5}px` }}>
        <h1>Developing Software,</h1>
        <h2>Delivering Success.</h2>
        <h3>↓  Scroll for more</h3>
      </div>
<div className='restulhomepage'>
<div className="VerticalLineContainer">
      <svg height="300" width="100%">
        <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="white" strokeWidth="4" />
        <circle cx="50%" cy="10%" r="10" fill="transparent" stroke="white" strokeWidth="4" />
        <circle cx="50%" cy="90%" r="10" fill="transparent" stroke="white" strokeWidth="4" />
      </svg>
    </div>
    <div class="mac-window">
    <div class="title-bar">
      <div class="window-title"></div>
      <div class="window-controls">
      <button style={{background:'red'}}></button>
        <button style={{background:'#FFBD44'}}></button>
        <button style={{background:'green'}}></button>
      </div>
    </div>
    <div class="content" style={{textAlign:'center'}}>
      <p style={{color:'white'}}>Web Development: From responsive websites to robust web applications, we craft solutions that drive your online success.<br/>
      <br/>Custom Software Development: Tailored software solutions designed to streamline your business processes and enhance efficiency.<br/>
<br/>UI/UX Design: Engaging and user-friendly designs that create memorable and positive experiences for your audience.<br/>
<br/>IT Consulting: Expert advice and strategic insights to help you make informed decisions in the ever-evolving tech landscape.</p>
    </div>
  </div>
  <div className="VerticalLineContainer">
      <svg height="300" width="100%">
        <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="white" strokeWidth="4" />
        <circle cx="50%" cy="10%" r="10" fill="transparent" stroke="white" strokeWidth="4" />
        <circle cx="50%" cy="90%" r="10" fill="transparent" stroke="white" strokeWidth="4" />
      </svg>
    </div>
    <div class="mac-window">
    <div class="title-bar">
      <div class="window-title"></div>
      <div class="window-controls">
        <button style={{background:'red'}}></button>
        <button style={{background:'#FFBD44'}}></button>
        <button style={{background:'green'}}></button>
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
      <svg height="300" width="100%">
        <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="white" strokeWidth="4" />
        <circle cx="50%" cy="10%" r="10" fill="transparent" stroke="white" strokeWidth="4" />
        <circle cx="50%" cy="90%" r="10" fill="transparent" stroke="white" strokeWidth="4" />
      </svg>
    </div>
    <div class="mac-window">
    <div class="title-bar">
      <div class="window-title"></div>
      <div class="window-controls">
      <button style={{background:'red'}}></button>
        <button style={{background:'#FFBD44'}}></button>
        <button style={{background:'green'}}></button>
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
    {/*aici ai 2 popup uri unu de login si unu de singuo
    aici trebe numa sa faci logica la butoane*/}
    {popupVisible && (
        <div className="PopupOverlay">
          <div className="PopupContent">
            {loginFormVisible ? (
              <div>
                <h2>Login</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                <label>
          Email:
          <input type="text" placeholder="Enter your email" />
        </label>
        <label>
          Password:
          <input type="password" placeholder="Enter your password" />
        </label>
        <button type="submit" onClick={() => setPopupVisible(false)}>
          Login
        </button>
                </form>
                <p>
                  Don't have an account yet?{' '}
                  <button
                    style={{ background: 'transparent', color: '#518582', fontWeight: 'bold', fontSize: 13 }}
                    onClick={handleSignUpButtonClick}
                  >
                    Sign up
                  </button>
                </p>
              </div>
            ) : (
              <div>
                <h2>Sign Up</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                <label>
          Email:
          <input type="text" placeholder="Enter your email" />
        </label>
                <label>
          Username:
          <input type="text" placeholder="Enter your username" />
        </label>
        <label>
          Password:
          <input type="password" placeholder="Enter your password" />
        </label>
        <button type="submit" onClick={() => {
        setPopupVisible(false);
        handleAccount()}}>
          Singup
        </button>
                </form>
                <p>
                  Already have an account?{' '}
                  <button
                    style={{ background: 'transparent', color: '#518582', fontWeight: 'bold', fontSize: 13 }}
                    onClick={handleLoginButtonClick}
                  >
                    Login
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};



export default ParallaxComponent;