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

      <footer className="footer footer-horizontal">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Help</a>
          <a className="link link-hover">Official Blog</a>
          <a className="link link-hover">Advertisement</a>
          <a className="link link-hover">VIP Membership</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset style={{ width: "20rem", maxWidth: "100%" }}>
            <label>Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>

    </>
  );
}
export default Layout;