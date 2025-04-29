import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importer les modules de React Router
import Navbar from './components/navbar'; // Importer le composant Navbar
import Home from './pages/auth/home'; // Importer la page d'accueil
import Register from './pages/auth/register'; // Importer la page d'inscription
import ResetPassword from './pages/auth/reset-password'; // Importer la page de réinitialisation du mot de passe
import AdventureStories from './pages/auth/AdventureStories'; // Importer la page d'histoires d'aventure (ajoutée)

import './App.css'; // Importer le fichier CSS global

const App = () => {
  return (
    <Router>
      {/* Navbar en haut de la page */}
      <Navbar /> 

      {/* Routes pour chaque page de l'application */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Page d'accueil */}
        <Route path="/register" element={<Register />} /> {/* Page d'inscription */}  
        <Route path="/reset-password" element={<ResetPassword />} /> {/* Page réinitialisation mot de passe */}
        <Route path="/adventure-stories" element={<AdventureStories />} /> {/* Nouvelle page d'histoires d'aventure */}
      </Routes>
    </Router>
  );
};

export default App;
