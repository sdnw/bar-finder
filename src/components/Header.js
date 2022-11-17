import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <NavLink to="/" className="header__title">
        Brewery Finder 
      </NavLink>
    </div>
  );
}

export default Header;