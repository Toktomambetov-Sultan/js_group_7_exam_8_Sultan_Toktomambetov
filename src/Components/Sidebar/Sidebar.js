import React from "react";
import { NavLink } from "react-router-dom";
import { categories } from "../../Constants/Constants";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <ul className="Sidebar">
      <NavLink to="/category/all" exact>All</NavLink>
      <hr/>
      {categories.map(category => (
        <li key={category.id}>
          <NavLink to={"/category/" + category.id}  exact>{category.name}</NavLink>
        </li>
      ))}
    </ul>
  );
}
