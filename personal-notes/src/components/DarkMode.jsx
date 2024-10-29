import React, { useState, useEffect } from "react";
import "./../style/style.css";

export default function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme());

  const getAttribute = document.documentElement.getAttribute("data-theme");
  if (getAttribute == null) {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );
  }

  function getInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : false;
  }

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      document.documentElement.setAttribute(
        "data-theme",
        newMode ? "dark" : "light"
      );
      return newMode;
    });
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setIsDarkMode(getInitialTheme());
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="container-night-mode">
      <input
        type="checkbox"
        className="night-mode"
        checked={isDarkMode}
        onChange={toggleTheme}
      />
    </div>
  );
}
