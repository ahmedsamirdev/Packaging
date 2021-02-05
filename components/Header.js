import "./Header.module.css";
import Link from "next/link";

function Header() {
  return (
    <>
      <div className="hero_container">
        <div class="left_content_formobile">
          <span>We pack your product with care.</span>
          <a href="/">Contact us</a>
        </div>
        <div className="left_container margin-center">
          {/* Left_Navbar */}
          <div className="left_navbar ">
            <img src="/logo.png" alt="" className="nav_logo" />
            <img src="/footer_logo.png" alt="" className="nav_logo_mobile" />

            <picture>
              <source media="(min-width: 650px)" srcset="/logo.png" />
              <source media="(min-width: 465px)" srcset="/footer_logo.png" />
            </picture>
          </div>
          {/* Left_Content */}

          <div className="left_content">
            <span>We pack your product with care.</span>
            <a href="/">Contact us</a>
          </div>
        </div>
        {/* -------------------------------------------------------- */}
        <div className="right_container">
          <img src="/header-pattern.png" alt="" className="pattern" />
          {/* right_Navbar */}
          <div className="right_navbar ">
            <div id="menuToggle">
              <input type="checkbox" />

              <span></span>
              <span></span>
              <span></span>

              <ul id="menu">
                <Link rel="preload" href="/">
                  <li>Home</li>
                </Link>
                <Link rel="preload" href="/">
                  <li>About</li>
                </Link>
                <Link rel="preload" href="/">
                  <li>Our projects</li>
                </Link>
                <Link rel="preload" href="/">
                  <li>Contact us</li>
                </Link>
              </ul>
            </div>
            <ul className="menu_nav">
              <Link rel="preload" href="/">
                <li>Home</li>
              </Link>
              <Link rel="preload" href="/">
                <li>About</li>
              </Link>
              <Link rel="preload" href="/">
                <li>Our projects</li>
              </Link>
              <Link rel="preload" href="/">
                <li>Contact us</li>
              </Link>
            </ul>
          </div>
          {/* Right_Content */}
          <div className="right_content">
            <img src="/hero_1.png" alt="" className="hero1" />
            <img src="/hero_2.png" alt="" className="hero2" />
            <img src="/hero_3.png" alt="" className="hero3" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
