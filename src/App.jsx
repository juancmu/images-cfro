// App.js
import React, { useState } from 'react';
import Home from './Home';
import About from './About';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const [language, setLanguage] = useState('en'); // Default language is English

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <div>
      <div className="toggle-switch-container">
        <span className="toggle-switch-label-text">ENG</span>
        <input
          type="checkbox"
          id="languageToggle"
          onChange={toggleLanguage}
          checked={language === 'es'}
          className="toggle-switch-checkbox"
        />
        {/* <span className="toggle-switch-label-text">ENG</span><br></br> */}
        <label htmlFor="languageToggle" className="toggle-switch-label">
          <span className="toggle-switch-inner"></span>
          <span className="toggle-switch-switch"></span>
        </label>
        <span className="toggle-switch-label-text">SPA</span>
      </div>
      <hr />
      <Home language={language} />
      <hr />
      <About language={language} />
    </div>
  );
};

export default App;
