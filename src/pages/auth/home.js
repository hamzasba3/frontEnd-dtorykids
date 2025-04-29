import React from 'react';
import { Link } from 'react-router-dom'; // Importer le composant Link
import './home.css'; // Importer le fichier CSS

const Home = () => {
  return (
    <div className="home-container">
      {/* Section de bienvenue */}
      <section className="welcome-section">
        <h2>مرحبًا بكم في مكتبة القصص الصوتية</h2>
        <p>استكشف عالم من القصص المسموعة والممتعة باللغة العربية</p>
        <button className="start-button">ابدأ الاستماع الآن</button>
      </section>

      {/* Section des catégories */}
      <section className="categories-section">
        <h2>تصنيفات القصص</h2>
        <div className="categories-container">
          <div className="category-card">
            <img src="category1.jpg" alt="مغامرات" className="category-image"/>
            {/* Utiliser Link pour la redirection */}
            <Link to="/adventure-stories">
              <button className="category-btn">مغامرات</button>
            </Link>
          </div>
          <div className="category-card">
            <img src="category2.jpg" alt="حكايات شعبية" className="category-image"/>
            <button className="category-btn">حكايات شعبية</button>
          </div>
          <div className="category-card">
            <img src="category3.jpg" alt="قصص تعليمية" className="category-image"/>
            <button className="category-btn">قصص تعليمية</button>
          </div>
          <div className="category-card">
            <img src="category4.jpg" alt="قصص قصيرة" className="category-image"/>
            <button className="category-btn">قصص قصيرة</button>
          </div>
        </div>
      </section>

      {/* Section des histoires populaires */}
      <section className="popular-stories">
        <h3>أشهر القصص</h3>
        <div className="story-list">
          <button className="story-btn">قصة 1</button>
          <button className="story-btn">قصة 2</button>
          <button className="story-btn">قصة 3</button>
          <button className="story-btn">قصة 4</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
