import React, { useEffect, useState } from 'react';
import './App.css';
// import Header from './components/Header';
import BarContainer from './components/BarContainer';
// import SearchBar from './components/SearchBar';


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
    <div>
      {/* <Header />
      <SearchBar search={search} setSearch={setSearch} /> */}
      <BarContainer bars={bars} />
    </div>
  );
}

export default App;
