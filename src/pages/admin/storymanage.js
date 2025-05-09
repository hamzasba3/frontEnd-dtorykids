import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../../components/AdminSidebar'; 
import './storymanage.css';

const StoryManage = () => {
  // Données d'exemple pour les histoires
  const [stories, setStories] = useState([
    { 
      id: 1, 
      title: "L'aventure magique", 
      category: "Aventure", 
      age: "6-8 ans", 
      cover: "https://via.placeholder.com/320x200/6366F1/FFFFFF?text=L'aventure+magique"
    },
    { 
      id: 2, 
      title: "Le mystère de la forêt enchantée", 
      category: "Fantaisie", 
      age: "9-12 ans", 
      cover: "https://via.placeholder.com/320x200/8B5CF6/FFFFFF?text=Le+mystère"
    },
    { 
      id: 3, 
      title: "Les amis de la ferme", 
      category: "Conte", 
      age: "3-5 ans", 
      views: 25,
      cover: "https://via.placeholder.com/320x200/3B82F6/FFFFFF?text=Les+amis"
    },
    { 
      id: 4, 
      title: "Voyage vers les étoiles", 
      category: "Science-Fiction", 
      age: "13+ ans", 
      views: 100,
      cover: "https://via.placeholder.com/320x200/A855F7/FFFFFF?text=Voyage+étoiles"
    }
  ]);

  // État pour la confirmation de suppression
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [storyToDelete, setStoryToDelete] = useState(null);
  
  // État pour la modale d'édition
  const [showEditModal, setShowEditModal] = useState(false);
  const [storyToEdit, setStoryToEdit] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: '',
    category: '',
    age: '',
    cover: ''
  });

  // États pour les filtres et la recherche
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedAdminOrg, setSelectedAdminOrg] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' ou 'list'

  // Liste des catégories disponibles
  const categories = ['Toutes', ' مغامراتا', 'حكايات شعبية', 'قصص تعليمية', 'Science-قصص قصيرة', 'Aventure', 'Fantaisie', 'Conte', 'Science-Fiction'];
  
  // Liste des administrations (exemple)
  const administrations = ['Toutes', 'Bibliothèque scolaire', 'Centre culturel', 'École primaire'];
  
  // Liste des tranches d'âge
  const ageRanges = ['3-5 ans', '6-8 ans', '9-12 ans', '13+ ans'];

  // Fonction pour ouvrir la modal de confirmation de suppression
  const openDeleteModal = (storyId) => {
    setStoryToDelete(storyId);
    setShowDeleteModal(true);
  };

  // Fonction pour fermer la modal de suppression
  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setStoryToDelete(null);
  };

  // Fonction pour supprimer une histoire
  const deleteStory = () => {
    if (storyToDelete) {
      setStories(stories.filter(story => story.id !== storyToDelete));
      closeDeleteModal();
    }
  };

  // Fonction pour ouvrir la modal d'édition
  const openEditModal = (storyId) => {
    const story = stories.find(story => story.id === storyId);
    if (story) {
      setStoryToEdit(storyId);
      setEditFormData({
        title: story.title,
        category: story.category,
        age: story.age,
        cover: story.cover
      });
      setShowEditModal(true);
    }
  };

  // Fonction pour fermer la modal d'édition
  const closeEditModal = () => {
    setShowEditModal(false);
    setStoryToEdit(null);
  };

  // Fonction pour gérer les changements dans le formulaire d'édition
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value
    });
  };

  // Fonction pour soumettre le formulaire d'édition
  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (storyToEdit) {
      // Mettre à jour l'histoire dans la liste
      setStories(stories.map(story => 
        story.id === storyToEdit ? 
        {
          ...story,
          title: editFormData.title,
          category: editFormData.category,
          age: editFormData.age,
          cover: editFormData.cover
        } : 
        story
      ));
      closeEditModal();
    }
  };

  // Fonction pour filtrer les histoires
  const filteredStories = stories.filter(story => {
    // Filtre par terme de recherche
    const matchesSearch = searchTerm === '' || 
      story.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filtre par catégorie
    const matchesCategory = selectedCategory === '' || 
      selectedCategory === 'Toutes' || 
      story.category === selectedCategory;
    
    // On retourne true si l'histoire correspond à tous les filtres
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <AdminSidebar />
      
      {/* Contenu principal */}
      <div className="main-content">
        <div className="story-manage-container">
          {/* En-tête */}
          <header className="story-manage-header">
            <h1>GESTION DES HISTOIRES</h1>
          </header>

          {/* Zone de filtrage et recherche */}
          <div className="filter-search-container">
            <div className="search-filters">
              <div className="filter-group">
                <label>Mots-clés :</label>
                <div className="search-input-container">
                  <input 
                    type="text" 
                    placeholder="Rechercher une histoire..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                </div>
              </div>
              
              <div className="filter-group">
                <label>Catégorie :</label>
                <div className="select-container">
                  <select 
                    value={selectedCategory} 
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="filter-select"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="filter-group">
                <label>Administration organisatrice :</label>
                <div className="select-container">
                  <select 
                    value={selectedAdminOrg} 
                    onChange={(e) => setSelectedAdminOrg(e.target.value)}
                    className="filter-select"
                  >
                    {administrations.map(admin => (
                      <option key={admin} value={admin}>{admin}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <button className="search-button">
                <span className="search-icon">🔍</span>
              </button>
            </div>
            
            <div className="view-toggle">
              <button 
                className={`view-button ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <span className="list-icon">≡</span>
              </button>
              <button 
                className={`view-button ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <span className="grid-icon">⊞</span>
              </button>
            </div>
          </div>

          <div className="results-count">
            {filteredStories.length} Résultats
          </div>

          {/* Zone de contenu principal */}
          <main className="story-manage-main">
            {/* Bouton pour créer une nouvelle histoire */}
            <div className="create-button-container">
              <Link to="/create-story" className="create-story-button">
                <span className="plus-icon">+</span>
                <span>إنشاء قصة جديدة</span>
              </Link>
            </div>

            {/* Grille ou liste des cartes d'histoires */}
            <div className={`story-cards-${viewMode}`}>
              {filteredStories.map(story => (
                <div key={story.id} className={`story-card ${viewMode}`}>
                  <div className="story-card-image">
                    <img src={story.cover} alt={story.title} />
                    <div className="story-views">
                      <span className="view-icon">👁️</span> {story.views} vues
                    </div>
                  </div>
                  <div className="story-card-content">
                    <h3>{story.title}</h3>
                    <div className="story-meta">
                      <span className="story-category">{story.category}</span>
                      <span className="story-age">{story.age}</span>
                    </div>
                  </div>
                  <div className="story-card-actions">
                    <button 
                      className="edit-button"
                      onClick={() => openEditModal(story.id)}
                    >
                      <span className="action-icon">✏️</span>
                      Modifier
                    </button>
                    <button 
                      className="delete-button"
                      onClick={() => openDeleteModal(story.id)}
                    >
                      <span className="action-icon">🗑️</span>
                      Supprimer
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="pagination">
              <button className="pagination-button prev">
                <span>❮</span>
              </button>
              <span className="page-info">
                {filteredStories.length > 0 
                  ? `1-${Math.min(filteredStories.length, 4)} sur ${filteredStories.length}` 
                  : "0 résultat"}
              </span>
              <button className="pagination-button next">
                <span>❯</span>
              </button>
            </div>
          </main>

          {/* Modal de confirmation de suppression */}
          {showDeleteModal && (
            <div className="delete-modal-overlay">
              <div className="delete-modal">
                <h3>Confirmation de suppression</h3>
                <p>Êtes-vous sûr de vouloir supprimer cette histoire ?</p>
                <p className="warning-text">Cette action est irréversible.</p>
                <div className="modal-actions">
                  <button 
                    className="cancel-button"
                    onClick={closeDeleteModal}
                  >
                    Annuler
                  </button>
                  <button 
                    className="confirm-delete-button"
                    onClick={deleteStory}
                  >
                    Confirmer la suppression
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Modal d'édition d'histoire */}
          {showEditModal && storyToEdit && (
            <div className="edit-modal-overlay">
              <div className="edit-modal">
                <div className="edit-modal-header">
                  <h3>Modifier l'histoire</h3>
                  <button className="close-modal-button" onClick={closeEditModal}>×</button>
                </div>
                <form onSubmit={handleEditSubmit} className="edit-story-form">
                  <div className="form-group">
                    <label htmlFor="title">Titre de l'histoire</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={editFormData.title}
                      onChange={handleEditChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="category">Catégorie</label>
                    <select
                      id="category"
                      name="category"
                      value={editFormData.category}
                      onChange={handleEditChange}
                      required
                    >
                      {categories.filter(cat => cat !== 'Toutes').map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="age">Tranche d'âge</label>
                    <select
                      id="age"
                      name="age"
                      value={editFormData.age}
                      onChange={handleEditChange}
                      required
                    >
                      {ageRanges.map(age => (
                        <option key={age} value={age}>{age}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="cover">URL de la couverture</label>
                    <input
                      type="text"
                      id="cover"
                      name="cover"
                      value={editFormData.cover}
                      onChange={handleEditChange}
                      required
                    />
                  </div>
                  
                  <div className="cover-preview">
                    <img src={editFormData.cover} alt="Aperçu de la couverture" />
                  </div>
                  
                  <div className="modal-actions">
                    <button type="button" className="cancel-button" onClick={closeEditModal}>
                      Annuler
                    </button>
                    <button type="submit" className="save-button">
                      Enregistrer les modifications
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryManage;