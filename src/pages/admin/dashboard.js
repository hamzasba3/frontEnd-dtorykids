import React, { useState } from 'react';
import AdminSidebar from '../../components/AdminSidebar';
import { 
  RiNotification3Line, 
  RiListCheck, 
  RiMailLine, 
  RiSettings3Line, 
  RiMoonLine,
  RiEditLine,
  RiDeleteBin6Line,
  RiEyeLine,
  RiSearchLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiCloseLine
} from 'react-icons/ri';
import './dashboard.css';

const Dashboard = () => {
  // État pour les utilisateurs (données simulées)
  const [users, setUsers] = useState([
    { id: 1, name: 'Hamza Janane', email: 'hamza@example.com', role: 'Admin', status: 'Active', lastLogin: '2025-05-02' },
    { id: 2, name: 'mehdi houari', email: 'mehdi@example.com', role: 'User', status: 'Active', lastLogin: '2025-05-01' },
  ]);
  
  // États pour les modales
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [userToEdit, setUserToEdit] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    email: '',
    role: '',
    status: ''
  });
  
  // État pour la pagination
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  
  // Calcul pour la pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);
  
  // Fonction pour changer de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  // Fonction pour le changement de statut (simulation)
  const toggleStatus = (id) => {
    setUsers(users.map(user => 
      user.id === id 
        ? {...user, status: user.status === 'Active' ? 'Inactive' : 'Active'} 
        : user
    ));
  };

  // Fonction pour ouvrir la modale de suppression
  const openDeleteModal = (user) => {
    setUserToDelete(user);
    setShowDeleteModal(true);
  };

  // Fonction pour supprimer un utilisateur
  const deleteUser = () => {
    if (userToDelete) {
      const updatedUsers = users.filter(user => user.id !== userToDelete.id);
      setUsers(updatedUsers);
      setShowDeleteModal(false);
      setUserToDelete(null);
    }
  };

  // Fonction pour ouvrir la modale d'édition
  const openEditModal = (user) => {
    setUserToEdit(user);
    setEditFormData({
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status
    });
    setShowEditModal(true);
  };

  // Fonction pour gérer les changements dans le formulaire d'édition
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Fonction pour soumettre le formulaire d'édition
  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (userToEdit) {
      const updatedUsers = users.map(user => 
        user.id === userToEdit.id 
          ? { ...user, ...editFormData } 
          : user
      );
      setUsers(updatedUsers);
      setShowEditModal(false);
      setUserToEdit(null);
    }
  };

  return (
    <div className="dashboard-container">
      <AdminSidebar /> {/* Affichage de la sidebar */}
      <div className="main-content">
        <div className="toolbar">
          <div className="search-container">
            <RiSearchLine className="search-icon" />
            <input type="text" placeholder="Search..." className="search-bar" />
          </div>
          <div className="toolbar-icons">
            <RiNotification3Line className="toolbar-icon" />
            <RiListCheck className="toolbar-icon" />
            <RiMailLine className="toolbar-icon" />
            <RiSettings3Line className="toolbar-icon" />
            <RiMoonLine className="toolbar-icon" />
            <div className="user-icon">
              <img src="/path/to/user-image.jpg" alt="User" />
            </div>
          </div>
        </div>
        
        <div className="dashboard-header">
          <h1>لوحة القيادة</h1>
          <p>Page avec des cartes d'info</p>
        </div>
        
        <div className="info-cards-container">
          <div className="info-card" style={{ backgroundColor: "#7367F0" }}>
            <div className="info-card-header">Users</div>
            <div className="info-card-body">
              <h2>26K</h2>
              <div className="info-card-footer">
                <span className="percentage-down">↓ 12.4%</span>
              </div>
            </div>
          </div>
          
          <div className="info-card" style={{ backgroundColor: "#28C76F" }}>
            <div className="info-card-header">عدد الأعضاء</div>
            <div className="info-card-body">
              <h2>200</h2>
              <div className="info-card-footer">
                <span className="percentage-up">↑ 40.9%</span>
              </div>
            </div>
          </div>
          
          <div className="info-card" style={{ backgroundColor: "#FF9F43" }}>
            <div className="info-card-header">عدد الفئات</div>
            <div className="info-card-body">
              <h2>5</h2>
              <div className="info-card-footer">
                <span className="percentage-up">↑ 84.7%</span>
              </div>
            </div>
          </div>
          
          <div className="info-card" style={{ backgroundColor: "#FF6B6B" }}>
            <div className="info-card-header">عدد القصص</div>
            <div className="info-card-body">
              <h2>40</h2>
              <div className="info-card-footer">
                <span className="percentage-down">↓ 23.6%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tableau des utilisateurs */}
        <div className="users-table-section">
          <div className="section-header">
            <h2>Liste des utilisateurs</h2>
            <button className="add-user-btn">+ Ajouter un utilisateur</button>
          </div>
          
          <div className="table-container">
            <table className="users-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nom</th>
                  <th>Email</th>
                  <th>Rôle</th>
                  <th>Statut</th>
                  <th>Dernière connexion</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map(user => (
                  <tr key={user.id}>
                    <td>#{user.id}</td>
                    <td className="user-name-cell">
                      <div className="avatar">
                        {user.name.charAt(0)}
                      </div>
                      <span>{user.name}</span>
                    </td>
                    <td>{user.email}</td>
                    <td><span className={`role-badge ${user.role.toLowerCase()}`}>{user.role}</span></td>
                    <td>
                      <div className="status-toggle">
                        <span className={`status-indicator ${user.status.toLowerCase()}`}></span>
                        <span className="status-text">{user.status}</span>
                      </div>
                    </td>
                    <td>{user.lastLogin}</td>
                    <td className="actions-cell">
                      <button className="action-btn view"><RiEyeLine /></button>
                      <button className="action-btn edit" onClick={() => openEditModal(user)}><RiEditLine /></button>
                      <button className="action-btn delete" onClick={() => openDeleteModal(user)}><RiDeleteBin6Line /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="pagination">
            <button 
              className="pagination-btn" 
              onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
              disabled={currentPage === 1}
            >
              <RiArrowLeftSLine />
            </button>
            
            <div className="pagination-numbers">
              {Array.from({ length: totalPages }, (_, i) => (
                <button 
                  key={i+1} 
                  className={`pagination-number ${currentPage === i+1 ? 'active' : ''}`}
                  onClick={() => paginate(i+1)}
                >
                  {i+1}
                </button>
              ))}
            </div>
            
            <button 
              className="pagination-btn" 
              onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
              disabled={currentPage === totalPages}
            >
              <RiArrowRightSLine />
            </button>
          </div>
        </div>
      </div>

      {/* Modale de confirmation de suppression */}
      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-header">
              <h3>Confirmer la suppression</h3>
              <button className="close-btn" onClick={() => setShowDeleteModal(false)}>
                <RiCloseLine />
              </button>
            </div>
            <div className="modal-body">
              <p>Êtes-vous sûr de vouloir supprimer l'utilisateur <strong>{userToDelete?.name}</strong>?</p>
              <p>Cette action est irréversible.</p>
            </div>
            <div className="modal-footer">
              <button className="cancel-btn" onClick={() => setShowDeleteModal(false)}>Annuler</button>
              <button className="delete-btn" onClick={deleteUser}>Supprimer</button>
            </div>
          </div>
        </div>
      )}

      {/* Modale d'édition d'utilisateur */}
      {showEditModal && (
        <div className="modal-overlay">
          <div className="modal-container edit-modal">
            <div className="modal-header">
              <h3>Modifier l'utilisateur</h3>
              <button className="close-btn" onClick={() => setShowEditModal(false)}>
                <RiCloseLine />
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleEditSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={editFormData.name} 
                    onChange={handleEditChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={editFormData.email} 
                    onChange={handleEditChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="role">Rôle</label>
                  <select 
                    id="role" 
                    name="role" 
                    value={editFormData.role} 
                    onChange={handleEditChange}
                    required
                  >
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="status">Statut</label>
                  <select 
                    id="status" 
                    name="status" 
                    value={editFormData.status} 
                    onChange={handleEditChange}
                    required
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="modal-footer">
                  <button type="button" className="cancel-btn" onClick={() => setShowEditModal(false)}>Annuler</button>
                  <button type="submit" className="save-btn">Enregistrer</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;