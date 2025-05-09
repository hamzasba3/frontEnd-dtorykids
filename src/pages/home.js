import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import logo from '../assets/images/logov01.png'

const Home = () => {
  return (
    <div className="site-container">
     

      <main className="main-content">
        {/* Section de bienvenue */}
        <section className="welcome-section">
          <h1>مرحبًا بكم في مكتبة القصص الصوتية</h1>
          <p>استكشف عالم من القصص المسموعة والممتعة باللغة العربية</p>
          <button className="start-button">ابدأ الاستماع الآن</button>
        </section>


        {/* Section des catégories avec des cercles */}
        <section className="categories-section">
          <h2>تصنيفات القصص</h2>
          <div className="categories-container">
            <div className="category-circle">
              <Link to="/adventure-stories">
                <div className="circle-image-container">
                  <img src="/images/category1.jpg" alt="مغامرات" className="category-image" />
                  
                </div>
                <span className="category-name">مغامرات</span>
              </Link>
            </div>
            <div className="category-circle">
              <Link to="/folk-stories">
                <div className="circle-image-container">
                  <img src="/images/category2.jpg" alt="حكايات شعبية" className="category-image" />
                </div>
                <span className="category-name">حكايات شعبية</span>
              </Link>
            </div>
            <div className="category-circle">
              <Link to="/educational-stories">
                <div className="circle-image-container">
                  <img src="/images/category3.jpg" alt="قصص تعليمية" className="category-image" />
                </div>
                <span className="category-name">قصص تعليمية</span>
              </Link>
            </div>
            <div className="category-circle">
              <Link to="/short-stories">
                <div className="circle-image-container">
                  <img src="/images/category4.jpg" alt="قصص قصيرة" className="category-image" />
                </div>
                <span className="category-name">قصص قصيرة</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Section des histoires populaires */}
        <section className="popular-stories">
          <h3>أشهر القصص</h3>
          <div className="story-list">
            <Link to="/story/1" className="story-btn">قصة 1</Link>
            <Link to="/story/2" className="story-btn">قصة 2</Link>
            <Link to="/story/3" className="story-btn">قصة 3</Link>
            <Link to="/story/4" className="story-btn">قصة 4</Link>
          </div>
        </section>
        
        {/* Section À propos en bas de page - Correctement formatée */}
        
      </main>
      <section className="about-section">
  <div className="about-content">
    <div className="about-description">
      <p>
        انطلق مع طفلك في <strong className="highlight">رحلة سحرية</strong> عبر عوالم مليئة بالمغامرات والعجائب! نقدم لكم مجموعة
        مختارة من القصص الرائعة والمميزة التي ستأسر خيال طفلك وتفتح أمامه آفاقاً جديدة من الإبداع والمعرفة.
      </p>
      <p>
        صُممت مكتبتنا الرقمية بعناية فائقة لتناسب <strong className="highlight">جميع الفئات العمرية من سن 1 إلى 12 عاماً</strong>، 
        متضمنة تشكيلة واسعة من القصص المشوقة: مغامرات مثيرة، حكايات تعليمية، قصص خيالية ساحرة، وروايات تربوية هادفة. 
        ونحرص دائماً على إثراء مكتبتنا بإضافات جديدة ومميزة!
      </p>
      <p>
        ولتجربة فريدة لا مثيل لها، اكتشف
        <Link to="/create-story" className="tool-link"> أداتنا المبتكرة لإنشاء القصص المخصصة </Link>
        التي تتيح لك تصميم حكاية فريدة تناسب شخصية طفلك واهتماماته، من خلال اختيار العمر والموضوع والشخصيات التي يفضلها.
      </p>
    </div>
  </div>
  <div className="about-image">
    <img src="/images/castle-rainbow.png" alt="قلعة وقوس قزح" />
  </div>
</section>

      {/* Pied de page */}
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>روابط سريعة</h4>
            <ul>
              <li><Link to="/about">من نحن</Link></li>
              <li><Link to="/contact">اتصل بنا</Link></li>
              <li><Link to="/privacy">سياسة الخصوصية</Link></li>
              <li><Link to="/terms">شروط الاستخدام</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>تابعنا</h4>
            <div className="social-links">
              <a href="#" className="social-icon">فيسبوك</a>
              <a href="#" className="social-icon">تويتر</a>
              <a href="#" className="social-icon">انستغرام</a>
              <a href="#" className="social-icon">يوتيوب</a>
            </div>
          </div>
        </div>
        <div className="copyright">
          © 2025 قصص الأطفال. جميع الحقوق محفوظة.
        </div>
      </footer>
    </div>
  );
};

export default Home;