import React from 'react';
import './StoryCard.css';  // Assurez-vous d'inclure le fichier CSS pour les animations

const StoryCard = ({ title, description, rating, time, audioAvailable, onClick }) => {
  return (
    <div className="story-card" onClick={onClick}>
      <div className="story-header">
        <h1 className="story-title">{title}</h1>
        <div className="rating">
          <span className="stars">⭐⭐⭐⭐⭐</span> {/* Utilisation de 5 étoiles pour l'exemple */}
          <span className="rating-number">({rating})</span>
        </div>
        <p className="story-time">{time} minutes</p>
        
      </div>

      <div className="story-content">
        <p className="story-description">{description}</p>
        <div className="story-actions">
          <button className="read-btn">استمع إلى القصة</button>
        
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
