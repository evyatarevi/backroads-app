import logo from "../images/logo.svg"; // import image like that.
import Link from "./Link";
import SocialLink from "./SocialLink.jsx";

import { pageLinks, socialLinks } from "../data.js";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="nav-link"
              text={link.text}
            />
          ))}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => (
            <SocialLink key={link.id} {...link} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
