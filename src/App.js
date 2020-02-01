import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ArtistesCard from './components/ArtistesCard/ArtistesCard';
import Reservation from './components/Reservation/Reservation';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="presentation__content">
        <h1 className="titre-presentation">presentation</h1>
        <p className="texte-presentation">bienvenue au circus dream, le cirque qui va vous emerveiller par tout ses artistes !!!</p>
      </div>
      <ArtistesCard />
      <Reservation />
    </div>
  );
}

export default App;
