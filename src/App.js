import React, { useEffect, useState } from 'react';
import './App.css';
// import Header from './components/Header';
import BarContainer from './components/BarContainer';
// import BarDetails from './components/BarDetails';
// import SearchBar from './components/SearchBar';
// import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';


function App() {
  const [bars, setBars] = useState([]);
  // const [search, setSearch] = useState('');


  function fetchBars() {
    fetch('https://api.openbrewerydb.org/breweries')
      .then((response) => response.json())
      .then((barData) => {
        setBars(barData);
      })
  }

  useEffect(fetchBars, []);

  return (
    <div className="App">
      {/* <Header />
      <SearchBar search={search} setSearch={setSearch} /> */}
      <BarContainer bars={bars}/>
      {/* <BarDetails /> */}
    </div>
  );
}

export default App;
