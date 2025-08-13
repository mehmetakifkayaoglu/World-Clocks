import React, { Component } from "react";
import "./DarkMode.css";

const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };
  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "dark") {
    setDarkMode();
  }

  const toggleTheme = () => {
    if (localStorage.getItem("selectedTheme") === "dark") {
      setLightMode();
      console.log('aydinlik oldu')
      localStorage.setItem("selectedTheme", "light");
    } else if (localStorage.getItem("selectedTheme") === "light") {
      setDarkMode();
      console.log('karanlik oldu')
      localStorage.setItem("selectedTheme", "dark");
    }
    console.log('tema tus calisti');
    console.log(localStorage.getItem("selectedTheme"));
  };

  return (
    <div>
      <button
        className="dark_mode"
        id="darkmode-toggle"
        onClick={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
      />
    </div>
  );
};

export default DarkMode;
