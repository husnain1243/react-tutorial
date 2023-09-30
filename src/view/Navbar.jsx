import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const Route = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/services",
      name: "Services",
    },
    {
      path: "/blog",
      name: "Blog",
    },
    {
      path: "/contactus",
      name: "Contact Us",
    },
  ];
  const [routeDate] = useState(Route);
  return (
    <div className="Navbar d-flex flex-column py-3 bg-dark">
      <nav className="container">
        <ul className="d-flex flex-row justify-content-center gap-3 list-unstyled m-0">
          {routeDate.map(({ name, path }, index) => {
            return (
                <li key={index}>
                  <Link to={path} className="link text-decoration-none text-white">{name}</Link>
                </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
