import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Pour la navigation entre les pages
import './Navbar.css'; // Importer le fichier CSS de la navbar

// Importer l'image du logo
import logo from '../assets/images/logov01.png'; // Assurez-vous que le chemin est correct
import { FaSearch } from 'react-icons/fa'; // Importer l'icône de recherche

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Gérer l'état du dropdown
  const [searchQuery, setSearchQuery] = useState(''); // Gérer la recherche

  // Fonction pour basculer l'état du menu déroulant
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Fonction pour gérer la saisie dans le champ de recherche
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Fonction pour soumettre la recherche (ici, juste un exemple)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Recherche effectuée pour:", searchQuery);
    // Logique de recherche ici (rediriger vers une page de résultats ou une API)
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Envelopper le logo et le texte dans un Link pour rediriger vers la page d'accueil */}
        <Link to="/" className="navbar-logo-link">
          <img src={logo} alt="Logo" className="logo" />
          <span>قصص الأطفال</span> {/* Le texte en arabe pour le titre */}
        </Link>
      </div>
      
      {/* Liens de navigation */}
      <div className="navbar-links">
        {/* Menu déroulant pour "القصص" */}
        <div className="navbar-link-container">
          <Link to="#" className="navbar-link" onClick={toggleDropdown}>القصص</Link>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/adventure-stories">مغامرات</Link> {/* Lien vers la page d'aventures */}
              <Link to="/fairytales">حكايات شعبية</Link>
              <Link to="/educational">قصص تعليمية</Link>
              <Link to="/short">قصص قصيرة</Link>
            </div>
          )}
        </div>

        <Link to="/ages" className="navbar-link">الأعمار</Link>
        <Link to="/create-story" className="navbar-link">إنشاء قصة</Link>
        <Link to="/create-rally" className="navbar-link">إنشاء رالي للقراءة</Link>
      </div>

      {/* Recherche dans la navbar */}
      <div className="navbar-search">
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input 
            type="text" 
            placeholder="ابحث هنا..." 
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button type="submit" className="search-btn">
            <FaSearch /> {/* Utilisation de l'icône importée ici */}
          </button>
        </form>
      </div>
      
      {/* Icônes de recherche et thème */}
      <div className="navbar-icons">
        <button className="theme-toggle-btn">
          <i className="fa fa-moon"></i>
        </button>
        
        {/* Lien vers la page de connexion/inscription */}
        <Link to="/register">
          <button className="auth-btn">
            تسجيل الدخول / التسجيل
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
