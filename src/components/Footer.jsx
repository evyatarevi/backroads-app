import { pageLinks, socialLinks } from "../data";
import FooterIcon from "./FooterIcon";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => (
          <FooterLink key={link.id} {...link} />
        ))}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => (
          <FooterIcon key={link.id} {...link} />
        ))}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()} </span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
