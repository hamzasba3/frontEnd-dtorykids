import React, { useState, useEffect } from 'react';
import { FaTh, FaCreditCard, FaList, FaSignOutAlt, FaBars, FaSearch, FaPlus, FaEdit, FaTrashAlt } from 'react-icons/fa';
import './categorymanage.css';

const CategoryManager = () => {
  // État pour la sidebar
  const [isOpen, setIsOpen] = useState(true);
  
  // État pour les catégories - suppression de "views" des objets de catégorie
  const [categories, setCategories] = useState([
    { id: 1, name: 'Aventure', description: 'Histoires pleines d\'action et de découvertes' },
    { id: 2, name: 'Mystère', description: 'Récits intrigants avec des énigmes à résoudre' },
    { id: 3, name: 'Amitié', description: 'Histoires sur les relations et le soutien mutuel' },
    { id: 4, name: 'Fantaisie', description: 'Mondes imaginaires et créatures magiques' }
  ]);
  
  // État pour la recherche et les filtres
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Toutes');
  const [selectedAdmin, setSelectedAdmin] = useState('Toutes');
  
  // État pour l'ajout et la modification des catégories
  const [newCategory, setNewCategory] = useState({ name: '', description: '' });
  const [editingCategory, setEditingCategory] = useState(null);
  const [message, setMessage] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' ou 'list'

  // Basculer l'état de la sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Ajouter une nouvelle catégorie - suppression de l'ajout de "views"
  const handleAddCategory = () => {
    if (!newCategory.name.trim()) {
      showMessage('اسم الفئة مطلوب', 'error');
      return;
    }
    
    const id = categories.length ? Math.max(...categories.map(c => c.id)) + 1 : 1;
    const newCategoryObj = { ...newCategory, id };
    setCategories([...categories, newCategoryObj]);
    setNewCategory({ name: '', description: '' });
    showMessage('تمت إضافة الفئة بنجاح', 'success');
    setShowAddForm(false);
  };

  // Supprimer une catégorie
  const handleDeleteCategory = (id) => {
    if (window.confirm('هل أنت متأكد من حذف هذه الفئة؟')) {
      setCategories(categories.filter(category => category.id !== id));
      showMessage('تم حذف الفئة', 'success');
    }
  };

  // Préparer l'édition d'une catégorie
  const startEditing = (category) => {
    setEditingCategory({ ...category });
  };

  // Annuler l'édition
  const cancelEditing = () => {
    setEditingCategory(null);
  };

  // Sauvegarder les modifications
  const saveEditing = () => {
    if (!editingCategory.name.trim()) {
      showMessage('اسم الفئة مطلوب', 'error');
      return;
    }
    
    setCategories(categories.map(cat => 
      cat.id === editingCategory.id ? editingCategory : cat
    ));
    setEditingCategory(null);
    showMessage('تم تحديث الفئة', 'success');
  };

  // Afficher un message
  const showMessage = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => setMessage(''), 3000);
  };

  // Filtrer les catégories en fonction de la recherche
  const filteredCategories = categories.filter(category => 
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
        <div className="sidebar-header">
          <h3>{isOpen ? "Menu" : ""}</h3>
          <button className="toggle-btn" onClick={toggleSidebar}>
            <FaBars />
          </button>
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
                <a href="/catergory-manage" className="sidebar-link active">
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

      {/* Main Content */}
      <div className="main-content">
        <header className="header">
          <h1>إدارة الفئات</h1>
        </header>

        {/* Message de notification */}
        {message && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}

        {/* Filtres et recherche */}
        <div className="filters-section">
          <div className="search-filter">
            <label>كلمات مفتاحية : <span className="info-icon">i</span></label>
            <div className="search-input">
              <input 
                type="text" 
                placeholder="البحث عن الفئة..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="search-icon" />
            </div>
          </div>
          
          <div className="dropdown-filter">
            <label>الفئة : <span className="info-icon">i</span></label>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="Toutes">الكل</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>
          
          <div className="dropdown-filter">
            <label>الإدارة : <span className="info-icon">i</span></label>
            <select 
              value={selectedAdmin}
              onChange={(e) => setSelectedAdmin(e.target.value)}
            >
              <option value="Toutes">الكل</option>
              <option value="Admin1">المشرف 1</option>
              <option value="Admin2">المشرف 2</option>
            </select>
          </div>
        </div>

        {/* Boutons de contrôle */}
        <div className="control-buttons">
          <div className="view-toggle">
            <button 
              className={viewMode === 'list' ? 'active' : ''} 
              onClick={() => setViewMode('list')}
            >
              <FaList />
            </button>
            <button 
              className={viewMode === 'grid' ? 'active' : ''} 
              onClick={() => setViewMode('grid')}
            >
              <FaTh />
            </button>
          </div>
          
          <button className="add-button" onClick={() => setShowAddForm(true)}>
            <FaPlus /> إنشاء فئة جديدة
          </button>
        </div>

        {/* Nombre de résultats */}
        <div className="results-count">
          {filteredCategories.length} نتائج
        </div>

        {/* Formulaire d'ajout */}
        {showAddForm && (
          <div className="modal-overlay">
            <div className="category-form">
              <h2>إنشاء فئة جديدة</h2>
              <div className="form-group">
                <label>الاسم:</label>
                <input
                  type="text"
                  value={newCategory.name}
                  onChange={(e) => setNewCategory({...newCategory, name: e.target.value})}
                  placeholder="اسم الفئة"
                />
              </div>
              <div className="form-group">
                <label>الوصف:</label>
                <input
                  type="text"
                  value={newCategory.description}
                  onChange={(e) => setNewCategory({...newCategory, description: e.target.value})}
                  placeholder="وصف الفئة"
                />
              </div>
              <div className="form-buttons">
                <button className="cancel-btn" onClick={() => setShowAddForm(false)}>إلغاء</button>
                <button className="submit-btn" onClick={handleAddCategory}>إضافة</button>
              </div>
            </div>
          </div>
        )}

        {/* Modal d'édition */}
        {editingCategory && (
          <div className="modal-overlay">
            <div className="category-form">
              <h2>تعديل الفئة</h2>
              <div className="form-group">
                <label>الاسم:</label>
                <input
                  type="text"
                  value={editingCategory.name}
                  onChange={(e) => setEditingCategory({...editingCategory, name: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>الوصف:</label>
                <input
                  type="text"
                  value={editingCategory.description}
                  onChange={(e) => setEditingCategory({...editingCategory, description: e.target.value})}
                />
              </div>
              <div className="form-buttons">
                <button className="cancel-btn" onClick={cancelEditing}>إلغاء</button>
                <button className="submit-btn" onClick={saveEditing}>حفظ</button>
              </div>
            </div>
          </div>
        )}

        {/* Affichage des catégories - suppression de la partie views */}
        {viewMode === 'grid' ? (
          <div className="categories-grid">
            {filteredCategories.map(category => (
              <div className="category-card" key={category.id}>
                <div className="category-image">
                  <img src={`/api/placeholder/300/200`} alt={category.name} />
                  {/* Suppression du compteur de vues */}
                </div>
                <div className="category-details">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
                <div className="category-actions">
                  <button onClick={() => startEditing(category)} className="edit-btn">
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDeleteCategory(category.id)} className="delete-btn">
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <table className="categories-table">
            <thead>
              <tr>
                <th>معرف</th>
                <th>اسم</th>
                <th>وصف</th>
                {/* Suppression de l'en-tête de colonne "مشاهدات" */}
                <th>إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {filteredCategories.map(category => (
                <tr key={category.id}>
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td>{category.description}</td>
                  {/* Suppression de la cellule de colonne "مشاهدات" */}
                  <td className="actions">
                    <button onClick={() => startEditing(category)} className="edit-btn">
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDeleteCategory(category.id)} className="delete-btn">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default CategoryManager;