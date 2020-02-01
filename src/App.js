import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ArtistesCard from './components/ArtistesCard/ArtistesCard';
import Reservation from './components/Reservation/Reservation';

function App() {
  return (
    <div className="App">
      <Header />
      <ArtistesCard />
      <Reservation />
    </div>
  );
}

export default App;
