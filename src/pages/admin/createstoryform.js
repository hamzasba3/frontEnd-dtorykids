import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 

import './CreateStory.css';

const CreateStory = () => {
  const [story, setStory] = useState({
    title: '',
    description: '',
    content: '',
    image: null,
    audio: null,
    category: [],
    age: ''
  });

  const navigate = useNavigate();

  // Les catégories disponibles
  const categories = [
    { id: 'adventure', label: 'مغامرات' },
    { id: 'fantasy', label: 'حكايات شعبية' },
    { id: 'mystery', label: 'قصص تعليمية' },
    { id: 'science-fiction', label: 'قصص قصيرة' },
    { id: 'fairy-tale', label: 'Conte de fées' }
  ];

  // Les tranches d'âge disponibles
  const ageGroups = [
    { id: '3-5', label: '3-5 ans' },
    { id: '6-8', label: '6-8 ans' },
    { id: '9-12', label: '9-12 ans' },
    { id: '13-plus', label: '13 ans et plus' }
  ];

  // Fonction de gestion des entrées du formulaire texte
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStory({
      ...story,
      [name]: value,
    });
  };

  // Fonction de gestion des fichiers
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setStory({
      ...story,
      [name]: files[0],
    });
  };

  // Fonction de gestion des catégories (multiples choix possibles)
  const handleCategoryChange = (categoryId) => {
    if (story.category.includes(categoryId)) {
      setStory({
        ...story,
        category: story.category.filter(id => id !== categoryId)
      });
    } else {
      setStory({
        ...story,
        category: [...story.category, categoryId]
      });
    }
  };

  // Fonction de gestion de l'âge (un seul choix possible)
  const handleAgeChange = (ageId) => {
    setStory({
      ...story,
      age: ageId
    });
  };

  // Fonction de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Histoire créée:', story);

    // Réinitialiser les champs du formulaire après soumission
    setStory({
      title: '',
      description: '',
      content: '',
      image: null,
      audio: null,
      category: [],
      age: ''
    });

    // Rediriger vers la page des histoires d'aventure
    navigate('/adventure-stories');
  };

  return (
    <div className="create-story-container">
      <div className="create-story-card">
        <div className="create-story-header">
          <h1>Créer une Nouvelle Histoire</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="create-story-form">
          {/* Titre */}
          <div className="form-group">
            <label htmlFor="title">العنوان</label>
            <input
              type="text"
              id="title"
              name="title"
              value={story.title}
              onChange={handleChange}
              required
              placeholder="Titre captivant de votre histoire"
            />
          </div>
          
          {/* Description */}
          <div className="form-group">
            <label htmlFor="description">الوصف</label>
            <textarea
              id="description"
              name="description"
              value={story.description}
              onChange={handleChange}
              required
              rows="3"
              placeholder="Brève description pour attirer les lecteurs"
            />
          </div>
          
          {/* Contenu */}
          <div className="form-group">
            <label htmlFor="content">المحتوى</label>
            <textarea
              id="content"
              name="content"
              value={story.content}
              onChange={handleChange}
              required
              rows="8"
              placeholder="Il était une fois..."
            />
          </div>
          
          {/* Partie upload */}
          <div className="upload-container">
            {/* Upload Image */}
            <div className="form-group">
              <label htmlFor="image">صورة الغلاف</label>
              <div className="file-upload-area">
                <label className="file-upload-label">
                  <div className="file-upload-content">
                    <svg className="upload-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p className="upload-primary-text">Cliquez pour télécharger</p>
                    <p className="upload-secondary-text">PNG, JPG (MAX. 2MB)</p>
                  </div>
                  <input 
                    id="image" 
                    name="image"
                    type="file" 
                    accept="image/*"
                    className="hidden-input"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              {story.image && (
                <p className="file-selected">Image sélectionnée: {story.image.name}</p>
              )}
            </div>
            
            {/* Upload Audio */}
            <div className="form-group">
              <label htmlFor="audio">ملف صوتي</label>
              <div className="file-upload-area">
                <label className="file-upload-label audio-upload">
                  <div className="file-upload-content">
                    <svg className="upload-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p className="upload-primary-text">Cliquez pour télécharger</p>
                    <p className="upload-secondary-text">MP3, WAV (MAX. 5MB)</p>
                  </div>
                  <input 
                    id="audio" 
                    name="audio"
                    type="file" 
                    accept="audio/*"
                    className="hidden-input"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              {story.audio && (
                <p className="file-selected">Audio sélectionné: {story.audio.name}</p>
              )}
            </div>
          </div>
          
          {/* Catégories et Âge */}
          <div className="categories-age-container">
            {/* Catégories */}
            <div className="form-group">
              <label>الفئات</label>
              <div className="checkbox-container">
                {categories.map((category) => (
                  <div key={category.id} className="checkbox-item">
                    <input
                      id={`category-${category.id}`}
                      type="checkbox"
                      checked={story.category.includes(category.id)}
                      onChange={() => handleCategoryChange(category.id)}
                      className="checkbox-input"
                    />
                    <label htmlFor={`category-${category.id}`} className="checkbox-label">
                      {category.label}
                    </label>
                  </div>
                ))}
              </div>
              {story.category.length === 0 && (
                <p className="error-message">Veuillez sélectionner au moins une catégorie</p>
              )}
            </div>
            
            {/* Tranche d'âge */}
            <div className="form-group">
              <label>Tranche d'âge</label>
              <div className="radio-container">
                {ageGroups.map((age) => (
                  <div key={age.id} className="radio-item">
                    <input
                      id={`age-${age.id}`}
                      type="radio"
                      name="age-group"
                      checked={story.age === age.id}
                      onChange={() => handleAgeChange(age.id)}
                      className="radio-input"
                    />
                    <label htmlFor={`age-${age.id}`} className="radio-label">
                      {age.label}
                    </label>
                  </div>
                ))}
              </div>
              {!story.age && (
                <p className="error-message">Veuillez sélectionner une tranche d'âge</p>
              )}
            </div>
          </div>
          
          {/* Bouton de soumission */}
          <div className="form-submit">
            <button type="submit" className="submit-button">
              Créer l'histoire
            </button>
            
          </div>
          <div className="form-submit">
      <Link to="/story-manage">
        <button type="button" className="submit-button">
          Annuler
        </button>
      </Link>
    </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStory;