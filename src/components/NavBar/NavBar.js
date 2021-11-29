import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../logoHenry.png";

import "./Navbar.css";

export default function NavBar() {
  return (
    <header className="navbar">
      <div>
        <img
          id="logoHenry"
          src={Logo}
          width="50px"
          height="50px"
          className="d-inline-block align-top"
          alt=""
        />
      </div>
      <nav>
        <ul className="list">
          <li className="list-item">
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/favs">Favourites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
