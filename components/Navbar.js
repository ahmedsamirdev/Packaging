import "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <div className="navbar_container">
        <img src="/logo.png" alt="" className="nav_logo" />
        <ul className="nav_menu">
          <li>Home</li>
          <li>About</li>
          <li>Our projects</li>
          <li>Contact us</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
