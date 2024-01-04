import React, { useState, useEffect } from 'react';
import "../Styles/ParallaxComponent.css";
import poza from "../Assets/logo bun-fotor-bg-remover-20231130185051.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, useLocation } from 'react-router-dom';
import "../Styles/Account.css";
import logo3 from "../Assets/Coral-logos_transparent.png";
import { updatePassword, getAuth, deleteUser} from 'firebase/auth';

function Account() {
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const { username, userEmail, userPhoto } = state || {};
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showDeletePopup, setShowDeletePopup] = useState(false);
     
    const handleChangePassword = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;

        updatePassword(user, newPassword).then(() => {
          console.log('Parola a fost schimbată cu succes!');
        }).catch((error) => {
          console.error('Eroare la schimbarea parolei:', error.message);
        });
        setSuccessMessage('Password changed successfully!');
        setErrorMessage('');
        setCurrentPassword('');
        setNewPassword('');
      } catch (error) {
        console.error('Eroare la schimbarea parolei:', error.message);
        setErrorMessage(`Error: ${error.message}`);
        setSuccessMessage('');
      }
    };

    const handleDelete = () =>{
      try{
        const auth = getAuth();
        const user = auth.currentUser;
        
        deleteUser(user).then(() => {
         }).catch((error) => {
          console.log('Contul a fost șters cu succes!');
         });
         handleHome();
      }catch (error) {
        console.error('Eroare la stergerea contului:', error.message);
      }
    }

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
      const handleConfirmDelete = () => {
        setShowDeletePopup(false);
        handleDelete();
      };
    
      const handleCancelDelete = () => {
        setShowDeletePopup(false);
      };
    
      const showDeleteConfirmation = () => {
        setShowDeletePopup(true);
      };
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
        <img src={userPhoto} alt='Profil' />
        <h2>Hello, </h2>
        <h3 style={{marginLeft:10,alignSelf:'center'}}> {username}</h3>
        </div>
        <h1 className='titluemail'>Email</h1>
        <p>{userEmail}</p>
        <div className='change-password-form'>
        <label>
          Current Password:
          <input
            type='password'
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </label>
        <label>
          New Password:
          <input
            type='password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
        <button onClick={handleChangePassword}>Change account password</button>
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
        <h2 className='titluApps'>Apps</h2>
        <img className='logo2' src={logo3} alt='logo3'></img>
        <button
        onClick={showDeleteConfirmation}
        style={{ color: 'red', background: 'transparent', fontSize: 15, fontWeight: 'bold', position: 'relative', bottom: 40 }}
      >
        Delete Cnidaria Account
      </button>

      {showDeletePopup && (
        <div className="delete-popup">
          <p>Are you sure you want to delete your account?</p>
          <button onClick={handleConfirmDelete}>Yes</button>
          <button onClick={handleCancelDelete}>No</button>
        </div>
      )}
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
