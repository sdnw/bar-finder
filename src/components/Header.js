import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <NavLink to="/" className="header__title">
        Brewery.list
      </NavLink>
      <h1 className="slogan">Find your brewery here!</h1>
    </div>
  );
}

export default Header;