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
        <div className="column_mobile">
          <div className="footer_contact">
            <div className="footer_email">
              <img src="/mail.png" alt="" />
              <span>mail.mail@gmail.com</span>
            </div>
            <div className="footer_phone">
              <img src="/phone-call.png" alt="" />
              <span>00256489655566</span>
            </div>
          </div>
          <div className="footer_adress">
            <div className="footer_adress-container">
              <img src="/location.png" alt="" />
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
