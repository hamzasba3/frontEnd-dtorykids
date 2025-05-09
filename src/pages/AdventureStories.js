import React from 'react';
import StoryCardComponent from '../components/StoryCardComponent'; // Assure-toi d'importer correctement le composant
import './AdventureStories.css';

const AdventureStories = () => {
  // Données pour les histoires
  const stories = [
    {
      title: "قصة العصفور الصغير",
      description: "كان هناك عصفور صغير يشعر بالخوف من الطيران، لكن بمساعدة أصدقائه من الحيوانات، اكتشف أن الطيران ليس مخيفاً بل ممتعاً.",
      rating: 10,
      time: 5,
      audioAvailable: true,
    },
    {
      title: "قصة القنفذ الحكيم",
      description: "كان القنفذ يعيش في الغابة ويُعرف بالحكمة. جاء إليه الحيوانات بحثاً عن النصائح وحلول لمشاكلهم. علمهم أن التعاون هو السر لحل أي مشكلة..",
      rating: 8,
      time: 7,
      audioAvailable: false,
    },
    {
      title: "قصة الأرنب والسلحفاة",
      description: "في سباق بين الأرنب السريع والسلحفاة البطيئة، اعتقد الجميع أن الأرنب سيفوز بسهولة، ولكن بسبب غروره، نام أثناء السباق بينما تابعت السلحفاة بحذر ونجحت في الفوز",
      rating: 9,
      time: 10,
      audioAvailable: true,
    },
    {
      title: "قصة الأرنب والسلحفاة",
      description: "في سباق بين الأرنب السريع والسلحفاة البطيئة، اعتقد الجميع أن الأرنب سيفوز بسهولة، ولكن بسبب غروره، نام أثناء السباق بينما تابعت السلحفاة بحذر ونجحت في الفوز",
      rating: 9,
      time: 10,
      audioAvailable: true,
    },
    {
      title: "قصة الأرنب والسلحفاة",
      description: "في سباق بين الأرنب السريع والسلحفاة البطيئة، اعتقد الجميع أن الأرنب سيفوز بسهولة، ولكن بسبب غروره، نام أثناء السباق بينما تابعت السلحفاة بحذر ونجحت في الفوز",
      rating: 9,
      time: 10,
      audioAvailable: true,
    },
    {
      title: "قصة الأرنب والسلحفاة",
      description: "في سباق بين الأرنب السريع والسلحفاة البطيئة، اعتقد الجميع أن الأرنب سيفوز بسهولة، ولكن بسبب غروره، نام أثناء السباق بينما تابعت السلحفاة بحذر ونجحت في الفوز",
      rating: 9,
      time: 10,
      audioAvailable: true,
    },
    {
      title: "قصة الأرنب والسلحفاة",
      description: "في سباق بين الأرنب السريع والسلحفاة البطيئة، اعتقد الجميع أن الأرنب سيفوز بسهولة، ولكن بسبب غروره، نام أثناء السباق بينما تابعت السلحفاة بحذر ونجحت في الفوز",
      rating: 9,
      time: 10,
      audioAvailable: true,
    },
    // Ajoute d'autres histoires ici
  ];

  return (
    <div>
      {/* Section du titre avec le fond et le texte centré */}
      <div className="title-section">
        <h1>قصص المغامرات</h1>
      </div>

      <div className="story-cards-container">
        {stories.map((story, index) => (
          <StoryCardComponent
            key={index}
            title={story.title}
            description={story.description}
            rating={story.rating}
            time={story.time}
            audioAvailable={story.audioAvailable}
          />
        ))}
      </div>
    </div>
  );
};

export default AdventureStories;
