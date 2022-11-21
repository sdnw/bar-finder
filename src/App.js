import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import BarContainer from "./components/BarContainer";
import BarDetails from "./components/BarDetails";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

function App() {
  const [bars, setBars] = useState([]);
  const [selectedBar, setSelectedBar] = useState(null);

  function fetchBars() {
    fetch("https://api.openbrewerydb.org/breweries")
      .then((response) => response.json())
      .then((barData) => {
        setBars(barData);
      });
  }

  useEffect(fetchBars, []);

  return (
    <div className="App" style={{ height: "100vh", width: "100%" }}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<BarContainer bars={bars} setSelectedBar={setSelectedBar} />}
        />
        <Route path="/bar/:id" element={<BarDetails bar={selectedBar} />} />
      </Routes>
      {/* <Header />
      <BarContainer bars={bars}/> */}
      {/* <BarDetails bars={bars}/> */}
    </div>
  );
}

export default App;
