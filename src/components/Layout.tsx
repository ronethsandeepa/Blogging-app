// ...existing code...
import { Outlet } from "react-router-dom";
import ReactLogo from "../assets/react.svg";
import type { JSX } from "react/jsx-dev-runtime";

const Layout = (): JSX.Element => {
  return (
    <>

      <nav className="site-nav">
        <div className="site-nav__wrap site-container">
          <a href="/" className="brand">
            <img src={ReactLogo} alt="Logo" />
            <span>CodePatch</span>
          </a>

          <div className="nav-links" id="navbar-default">
            <ul className="nav-list">
              <li>
                <a href="/" className="nav-link nav-link--active" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="nav-link">About</a>
              </li>
              <li>
                <a href="#" className="nav-link">Services</a>
              </li>
              <li>
                <a href="#" className="nav-link">Pricing</a>
              </li>
              <li>
                <a href="#" className="nav-link">Contact</a>
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