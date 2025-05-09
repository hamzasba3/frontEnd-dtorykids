import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importer React Router
import Navbar from './components/Navbar'; // Importer le composant Navbar
import Home from './pages/home'; // Importer la page d'accueil
import Register from './pages/auth/register'; // Importer la page d'inscription
import ResetPassword from './pages/auth/reset-password'; // Importer la page de réinitialisation du mot de passe
import AdventureStories from './pages/AdventureStories'; // Importer la page des histoires d'aventure
import AdminDashboard from './pages/admin/dashboard'; // Importer la page du tableau de bord admin
import StoryManage from './pages/admin/storymanage'; // Importer la page de gestion des histoires
import CategoryManage from './pages/admin/categorymanage'; // Importer la page de gestion des histoires

import CreateStory from './pages/admin/createstoryform'; // Importer la page de création d'histoire
import './App.css'; // Importer le fichier CSS global
import { useLocation } from 'react-router-dom'; // Déplacer l'import de useLocation ici

// Composant pour gérer la Navbar
const AppContent = () => {
  const location = useLocation();
  const noNavbarPaths = ["/admin-dashboard", "/create-story", "/story-manage", "/catergory-manage"]; // La Navbar ne s'affiche pas si on est sur la page admin
  const showNavbar = !noNavbarPaths.includes(location.pathname);

  return (
    <>
      {/* Si ce n'est pas la page AdminDashboard, afficher la Navbar */}
      {showNavbar && <Navbar />}

      {/* Routes pour chaque page de l'application */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Page d'accueil */}
        <Route path="/register" element={<Register />} /> {/* Page d'inscription */}
        <Route path="/reset-password" element={<ResetPassword />} /> {/* Page réinitialisation mot de passe */}
        <Route path="/adventure-stories" element={<AdventureStories />} /> {/* Page des histoires d'aventure */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* Page Admin Dashboard */}
        <Route path="/story-manage" element={<StoryManage />} /> {/* Page gestion des histoires */}
        <Route path="/create-story" element={<CreateStory />} /> {/* Page de création d'histoire */}
        <Route path="/catergory-manage" element={<CategoryManage />} /> {/* Page de création d'histoire */}

      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent /> {/* AppContent contient la logique de la navbar */}
    </Router>
  );
};

export default App;
