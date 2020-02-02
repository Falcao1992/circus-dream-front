import React from "react";
import "./Header.css";
import Burger from "./Burger/Burger";

class Header extends React.Component {
  render() {
    return (
      <>
        <Burger />
        <div className="header__content">
          <div className="presentation__content">
            <h1 className="titre-presentation">Circus Dream</h1>
            <p className="texte-presentation">
              Bienvenue au circus dream, le cirque qui va vous emerveiller par
              tout ses artistes !!!
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
