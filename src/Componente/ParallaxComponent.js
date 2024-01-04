import React, { useState, useEffect } from 'react';
import "../Styles/ParallaxComponent.css";
import poza from "../Assets/logo bun-fotor-bg-remover-20231130185051.png";
import { useNavigate } from 'react-router-dom';
//import AsyncStorage from "@react-native-async-storage/async-storage";
import { FIREBASE_AUTH,FIREBASE_FIRESTORE } from "./firebase";
import { collection, doc,getDoc,setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";

const ParallaxComponent = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loginFormVisible, setLoginFormVisible] = useState(true);
  const navigate = useNavigate();
  const auth= FIREBASE_AUTH;
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");

const [name, setName] = useState("");
const [photo, setPhoto] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password, {
        remember: 'local', // sau 'session'
      }); //photoURL
      const user = response.user;
      const usersCollection = collection(FIREBASE_FIRESTORE, 'users');
      const userDocRef = doc(usersCollection, user.uid);
      setName(user.displayName);
      const userDocSnapshot = await getDoc(userDocRef);
        const userData = userDocSnapshot.data();
        const photo= userData.photo;
        setPhoto(photo);
        localStorage.setItem('user_username', user.displayName);
        localStorage.setItem('user_id', user.uid);
        if(userData.user_photo){
          localStorage.setItem('user_photo',photo);
        }else{
          localStorage.removeItem('user_photo');
        }
        
        navigate('/Account', {
          state: {
            username: user.displayName,
            userEmail: user.email,
            userPhoto: photo,
          },
        });
       
    } catch (error) {
      console.log(error);
      alert('Login failed! ' + error.message);
    }
  };

  const handleSingup = async () => {
    try{
      const response = await createUserWithEmailAndPassword(auth,email,password)
      const user= response.user;
      await updateProfile(user,{
        displayName:username,
      })
      const usersCollection = collection(FIREBASE_FIRESTORE, 'users');
      const userDocRef = doc(usersCollection, user.uid);

       await setDoc(userDocRef, {
  email: user.email,
  displayName: user.displayName,
});
   navigate('/Account', {
     state: {
      username: user.displayName,
      userEmail: user.email,
      userPhoto: photo,
    },
  });
    }catch(error){
       console.log(error)
       alert('Error during signup! '+ error.message);
    }
  };

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
  <button
      className="CustomButton"
      style={{ width: 50, height: 50, borderRadius: 50,}}
      onClick={() => {
        handleCustomButtonClick();
        handleLoginButtonClick();
      }}
    ></button>
   <p>Your Account</p>
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
    {popupVisible && (
        <div className="PopupOverlay">
          <div className="PopupContent">
            {loginFormVisible ? (
              <div>
                <h2>Login</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                <label>
          Email:
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" onClick={handleLogin}>
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
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
                <label>
          Username:
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" onClick={handleSingup}>
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