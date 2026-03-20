import React from "react";

function Nav() {
  return (
    <nav aria-label="Main Navigation" role="navigation">
      <ul className="nav-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">Trends</a></li>
        <li><a href="#">Outfits</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;