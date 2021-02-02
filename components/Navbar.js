import "./Navbar.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="navbar_container">
        <img src="/logo.png" alt="" className="nav_logo" />
        <img src="/footer_logo.png" alt="" className="nav_logo_mobile" />

        <picture>
          <source
            media="(min-width: 650px)"
            srcset="/logo.png"
          />
          <source
            media="(min-width: 465px)"
            srcset="/footer_logo.png"
          />
        </picture>

        <ul className="menu_nav">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/">
            <li>About</li>
          </Link>
          <Link href="/">
            <li>Our projects</li>
          </Link>
          <Link href="/">
            <li>Contact us</li>
          </Link>
        </ul>

        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/">
              <li>About</li>
            </Link>
            <Link href="/">
              <li>Our projects</li>
            </Link>
            <Link href="/">
              <li>Contact us</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
