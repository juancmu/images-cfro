// About.js
import React from 'react';
import texts from './texts.json';

const About = ({ language }) => {
  const { title, description } = texts.about;
  return (
    <div>
      <h1>{language === 'en' ? title.en : title.es}</h1>
      <p>{language === 'en' ? description.en : description.es}</p>
    </div>
  );
};

export default About;
