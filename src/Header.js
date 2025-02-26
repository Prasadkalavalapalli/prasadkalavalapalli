import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const tabs = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Projects", path: "/projects" },
    { name: "More Details", path: "/details" }
  ];

  return (
    <>
    <div className="header">
    <h1 className="heading"> My Portfolio </h1>
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          style={{ textDecoration: "none", marginRight: "10px" }}
        >
          {({ isActive }) => (
            <button className={isActive ? "tab" : "tabs"}>
              {tab.name}
            </button>
          )}
        </NavLink>
      ))}
    </div></>
  );
}

export default Header;
