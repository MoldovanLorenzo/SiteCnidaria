import React from 'react';
import ParallaxComponent from './Componente/ParallaxComponent';
import "./Styles/App.css";
import { Route,Routes} from 'react-router-dom';
import AboutUs from './Componente/AboutUs';
import Portofolio from './Componente/Portofolio';
import Contact from './Componente/Contact';
import Solutions from './Componente/Solutions';
import Coral from './Componente/Coral';
const App = () => {
  return (
    
    <Routes>
    <Route path="/" element={<ParallaxComponent/>} />
    <Route path="AboutUs" element={<AboutUs />}/>
    <Route path="Portofolio" element={<Portofolio />} />
    <Route path="Contact" element={<Contact />} />
   <Route path="Solutions" element={<Solutions />} />
   <Route path="Coral" element={<Coral />} />
  </Routes>
  );
};

export default App;
