import React from "react";
import "./Header.css";
import Burger from "./Burger/Burger";

class Header extends React.Component {
  render() {
    return (
      <>
        <Burger />
        <div className="header__content">
        </div>
      </>
    );
  }
}

export default Header;
