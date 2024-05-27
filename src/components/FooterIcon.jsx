const FooterIcon = ({ href, classIcon }) => {
  return (
    <li>
      <a href={href} target="_blank" className="footer-icon">
        <i className={`fab fa-${classIcon}`}></i>
      </a>
    </li>
  );
};

export default FooterIcon;
