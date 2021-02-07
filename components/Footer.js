import "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className="footer_container">
        <div className="footer_logo_container">
          <img src="/footer_logo.webp" alt="" className="footer_logo" />
          <span>Designed by <a href="https://www.behance.net/nawalrahme2d9c">N.A.</a></span>
        </div>
        <div className="footer_menu">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Our projects</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="column_mobile">
          <div className="footer_contact">
            <div className="footer_email">
              <img src="/mail.webp" alt="" />
              <span>mail.mail@gmail.com</span>
            </div>
            <div className="footer_phone">
              <img src="/phone-call.webp" alt="" />
              <span>00256489655566</span>
            </div>
          </div>
          <div className="footer_adress">
            <div className="footer_adress-container">
              <img src="/location.webp" alt="" />
              <span>
                155 Mohamed Farid Street - Cairo. Helwan. 35 A Mostafa El
                Maraghy St. - Near Helwan metro station.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
