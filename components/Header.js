import "./Header.module.css";
import Link from "next/link";
import { useEffect } from 'react';

function Header() {
  return (
    <>
      <div className="hero_container">
        <div className="left_content_formobile">
          <span>We pack your product with care.</span>
          <a href="/">Contact us</a>
        </div>
        <div className="left_container margin-center">
          {/* Left_Navbar */}
          <div className="left_navbar ">
            <img src="/logo.webp" alt="" className="nav_logo" />
            <img src="/footer_logo.webp" alt="" className="nav_logo_mobile" />

            <picture>
              <source media="(min-width: 650px)" srcset="/logo.webp" />
              <source media="(min-width: 465px)" srcset="/footer_logo.webp" />
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
          <img src="/header-pattern.webp" alt="" className="pattern" />
          {/* right_Navbar */}
          <div className="right_navbar ">
            
          <div className="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label className="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul className="menu__box">
    <li><a className="menu__item"href="#">Home   </a></li>
                  <li><a className="menu__item"href="#">About   </a></li>         
                  <li><a className="menu__item"href="#">Our projects   </a></li>
                  <li><a className="menu__item"href="#">Contact us    </a></li>
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
            <img src="/hero_1.webp" alt="" className="hero1" />
            <img src="/hero_2.webp" alt="" className="hero2" />
            <img src="/hero_3.webp" alt="" className="hero3" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
