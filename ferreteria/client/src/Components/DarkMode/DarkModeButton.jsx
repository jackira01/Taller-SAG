import React, { useState } from "react";

function DarkModeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      className={`fb-btn fb-btn-sm ${
        isDarkMode ? "fb-btn-secondary" : "fb-btn-dark text-white"
      }`}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? "Light mode " : "Dark mode"}
    </button>
  );
}

export default DarkModeButton;
