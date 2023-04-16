import React from "react";

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-logo">Movie Catalog</div>
      <ul className="navbar-ul">
        <li>Home</li>
        <li>Browse</li>
        <li>Genres</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
