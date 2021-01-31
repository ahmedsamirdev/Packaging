import "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className="footer_container">
        <div className="footer_logo">
          <img src="/footer_logo.png" alt="" />
        </div>
        <div className="footer_menu">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Our projects</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="footer_email"></div>
        <div className="footer_adress"></div>
      </div>
    </>
  );
}

export default Footer;
