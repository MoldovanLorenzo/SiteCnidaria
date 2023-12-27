
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
  const handleHome = () => {
    navigate('/');
  };
  const newsData = [
    {
      id: 1,
      title: 'Multilingual Chat: Instant Message Translation',
      content: 'New Chat App Breakthrough: Real-Time Translation for Seamless Multilingual Conversations! Explore the Future of Global Communication. The app is set to launch in early 2024, bringing a new era of language diversity and effortless cross-cultural conversations to your fingertips. Stay tuned for a revolutionary experience in communication!',
      imageUrl: require('../Assets/Coral-logos.jpeg')

    },
    {
      id: 2,
      title: 'The NutriVision app is under development.',
      content: 'NutriVision, the app that identifies macronutrients through images, is currently under development. This innovative application aims to revolutionize nutritional tracking by analyzing photos and providing detailed information about the macronutrient content of various foods. Stay tuned for a new era in effortless nutritional awareness!',
      imageUrl: require('../Assets/NutriVision-logos.jpeg')

    },
  ];

  return (
    <div className='container'>
      <div className='HeaderAboutUS'>
        <button onClick={handleHome} style={{ background: 'transparent' }}>
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
      <h1>News</h1>
      <div className="news-page">
        <div className="news-list">
          {newsData.map(newsItem => (
            <div key={newsItem.id} className="news-item">
              <div className="news-image">
                <img src={newsItem.imageUrl} alt={`News ${newsItem.id}`} />
              </div>
              <div className="news-content">
                <h2>{newsItem.title}</h2>
                <p style={{color:'gray'}}>{newsItem.content}</p>
              </div>
            </div>
          ))}
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
