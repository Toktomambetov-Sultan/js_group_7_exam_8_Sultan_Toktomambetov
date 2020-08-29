import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="container inner">
        <div className="logo">Quotes Central</div>
        <div className="links">
          <NavLink to="/category/all" className="link">
            Qoutes
          </NavLink>
          <NavLink to="/addQuote" exact className="link">
            Submit new quote
          </NavLink>
        </div>
      </div>
    </div>
  );
}
