import "./App.css";
import BigHead from "./bigHead";
import Tail from "./tail";
import { Routes, Route } from "react-router-dom";
import YerelSaat from "./yerelSaat";
// import { useState, useEffect } from 'react'

function App() {
  if (localStorage.getItem("selectedTehem") == null) {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="arkaPlan">
              <BigHead />
              <Tail className="liste" />
            </div>
          }
        />
        <Route path="/bolge/*" element={<YerelSaat />} />
      </Routes>
    </div>
  );
}

export default App;
