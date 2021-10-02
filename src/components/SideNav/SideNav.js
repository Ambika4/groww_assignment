import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SideNav.css";

export default function SideNav() {
  let route = useLocation();
  let currentRouteFav = route.pathname === "/favourites" ? true : false;
  return (
    <div className="side-nav">
      <nav className="side-nav-container">
        <div
          className={
            currentRouteFav
              ? "side-nav-sections"
              : " active-link side-nav-sections"
          }
        >
          <Link to="/all-banks">All Banks</Link>
        </div>
        <div
          className={
            !currentRouteFav
              ? "side-nav-sections"
              : " active-link side-nav-sections"
          }
        >
          <Link to="/favourites">Favourites</Link>
        </div>
      </nav>
    </div>
  );
}
