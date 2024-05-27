const FooterLink = ({ href, text }) => {
  return (
    <li>
      <a href={href} className="footer-link">
        {text}
      </a>
    </li>
  );
};

export default FooterLink;
