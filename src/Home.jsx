// Home.js
import React from 'react';
import texts from './texts.json';

const Home = ({ language }) => {
  const { title, description } = texts.home;
  return (
    <div>
      <h1>{language === 'en' ? title.en : title.es}</h1>
      <p>{language === 'en' ? description.en : description.es}</p>
    </div>
  );
};

export default Home;
