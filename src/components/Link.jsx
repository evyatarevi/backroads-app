import React from "react";

const Link = ({ href, text }) => {
  return (
    <li>
      <a href={href} className="nav-link">
        {text}{" "}
      </a>
    </li>
  );
};

export default Link;
