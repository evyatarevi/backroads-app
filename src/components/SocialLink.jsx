import React from "react";

const SocialLink = ({ href, classIcon }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className="nav-icon">
        <i className={`fab fa-${classIcon}`}></i>
      </a>
    </li>
  );
};

export default SocialLink;
