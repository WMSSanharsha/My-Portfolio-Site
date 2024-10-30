import React, { useRef } from "react";

const NavBar = () => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    {
      label: "Reviews",
      link: "#reviews",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];

  return (
    <nav className="navbar">
      {navItems.map(({ label, link, className, ref }, key) => {
        return (
          <a
            href={link}
            className={className}
            ref={ref}
            key={key}
            onClick={null}
          >
            {label}
          </a>
        );
      })}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};
export default NavBar;
