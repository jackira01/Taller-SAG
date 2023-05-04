import React, { useState } from "react";
import "./Styles.css";

function DarkModeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <label class="switch">
      <input type="checkbox" onClick={toggleDarkMode} />
      <span class="slider"></span>
    </label>
  );
}

export default DarkModeButton;
