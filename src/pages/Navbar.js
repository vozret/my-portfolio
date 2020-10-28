import React from "react";
import {Link} from 'react-router-dom';

function Navbar() {
  const navStyle = {
    textDecoration: 'none'
  }

  return (
      <nav>
        <ul className="nav-link">
          <Link style={navStyle} to="/">
          <li>Home</li>
          </Link>
          <Link style={navStyle}  to="/about">
          <li>About</li>
          </Link>
          <Link style={navStyle}  to="/gallery">
          <li>Gallery</li>
          </Link>
        </ul>
      </nav>
  );
}

export default Navbar;
