// ...existing code...
import { Outlet } from "react-router-dom";
import Logo from "../assets/react.svg";
import type { JSX } from "react/jsx-dev-runtime";

const Layout = (): JSX.Element => {
  return (
    <>

      <nav className="site-nav">
        <div className="site-nav__wrap site-container">
          <a href="/" className="brand">
            <img src={Logo} alt="Logo" />
            <span>SyntaxTree</span>
          </a>

          <div className="nav-links" id="navbar-default">
            <ul className="nav-list">
              <li>
                <a href="/" className="nav-link nav-link--active" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="nav-link">About Us</a>
              </li>
              <li>
                <a href="#" className="nav-link">Write</a>
              </li>
              <li>
                <a href="#" className="nav-link">Membership</a>
              </li>
              <li>
                <a href="#" className="nav-link">Sign In</a>
              </li>
              <li>
                <a href="#" className="get-start-btn">Get Started</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

    </>
  );
}
export default Layout;