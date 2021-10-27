import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "pink",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <h1>SPICE IT UP!</h1>
      <h2>Helping You Put The Spice Into Your Meal Planning!</h2>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "gray",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/add"
        exact
        style={linkStyles}
        activeStyle={{
          background: "gray",
        }}
      >
        Add Recipe
      </NavLink>
      <NavLink
        to="/favorites"
        exact
        style={linkStyles}
        activeStyle={{
          background: "gray",
        }}
      >
        Favorites
      </NavLink>
    </div>
  );
}

export default NavBar;