import React, { useState } from 'react';
import './Styles.css';

function DarkModeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div id='page-content'>
      <label className='switch'>
        <input type='checkbox' onClick={toggleDarkMode} />
        <span className='slider'></span>
      </label>
    </div>
  );
}

export default DarkModeButton;
