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
    <div className="nav">
      <h1>SPICE IT UP!</h1>
      <h2>Helping You Put The Spice Into Your Meal Planning!</h2>
      <NavLink className="route"
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "gray",
        }}
      >
        Home
      </NavLink>
      <NavLink className="routeTwo"
        to="/add"
        exact
        style={linkStyles}
        activeStyle={{
          background: "gray",
        }}
      >
        Add Recipe
      </NavLink>
      <NavLink className="routeThree"
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