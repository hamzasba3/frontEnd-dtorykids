import React, { useState } from 'react';
import { FaTh, FaCreditCard, FaList, FaSignOutAlt, FaBars } from 'react-icons/fa'; // Ajout de FaBars
import './AdminSidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // L'état de la sidebar (ouverte ou fermée)
  
  // Fonction pour basculer l'état de la sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      {/* Bouton hamburger pour basculer la sidebar */}
      <button className="toggle-btn" onClick={toggleSidebar}>
        <FaBars />
      </button>
      
      {/* Contenu de la sidebar */}
      <div className="sidebar-header">
        <h3>{isOpen ? "Menu" : ""}</h3> {/* Le titre disparaît quand la sidebar est réduite */}
      </div>
      
      <div className="sidebar-content">
        <nav>
          <ul>
            <li>
              <a href="/admin-dashboard" className="sidebar-link">
                <FaTh />
                <span className="link-text">{isOpen ? "لوحة القيادة" : ""}</span>
              </a>
            </li>
            <li>
              <a href="/story-manage" className="sidebar-link">
                <FaCreditCard />
                <span className="link-text">{isOpen ? "لإدارة القصص" : ""}</span>
              </a>
            </li>
            <li>
              <a href="/catergory-manage" className="sidebar-link">
                <FaList />
                <span className="link-text">{isOpen ? "إدارة الفئات" : ""}</span>
              </a>
            </li>
     
            <li>
              <a href="/logout" className="sidebar-link">
                <FaSignOutAlt />
                <span className="link-text">{isOpen ? "تسجيل الخروج" : ""}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;