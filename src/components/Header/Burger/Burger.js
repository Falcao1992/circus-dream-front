import React from "react";
import "./Burger.css";
import { slide as Menu } from "react-burger-menu";

class Burger extends React.Component {
  showSettings = event => {
    event.preventDefault();
  };

  render() {
    return (
      <Menu>
        <a className="menu-item" href="#">
          Le Cirque
        </a>
        <a className="menu-item" href="#artistes">
          Les Artistes
        </a>
        <a className="menu-item" href="#representations">
          Les Representations
        </a>
        <a className="menu-item" href="#">
          Résever
        </a>
      </Menu>
    );
  }
}

export default Burger;
