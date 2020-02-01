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
          cirque
        </a>
        <a className="menu-item" href="#artistes">
          artistes
        </a>
        <a className="menu-item" href="#representations">
          representations
        </a>
        <a className="menu-item" href="#">
          contact
        </a>
      </Menu>
    );
  }
}

export default Burger;
