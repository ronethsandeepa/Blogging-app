export const LoginPage = () => {
  return (
    <div className="login-root">
      <div className="login-image-col">
        <h1 className="hp-headline">
          Share your <span className="hp-gradient">Knowledge</span> and <span className="hp-gradient">Grow</span> together
        </h1>
        <p className="hp-subtext">From learners to leaders — Write, Publish & Empower the community</p>
      </div>

      <div className="login-form-col">
        <form className="login-form">
          <h2 className="login-title">Sign in</h2>
          <p className="login-desc">
            Welcome back! Please sign in to continue
          </p>

          <button type="button" className="login-google-btn">
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
              alt="googleLogo"
            />
          </button>

          <div className="login-divider-row">
            <div className="login-divider"></div>
            <p className="login-divider-text">or sign in with email</p>
            <div className="login-divider"></div>
          </div>

          <div className="login-input-row">
            <input
              type="text"
              placeholder="Username"
              className="login-input"
              required
            />
          </div>

          <div className="login-input-row">
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280" />
            </svg>
            <input
              type="email"
              placeholder="Email id"
              className="login-input"
              required
            />
          </div>

          <div className="login-input-row">
            <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280" />
            </svg>
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              required
            />
          </div>

          <div className="login-options-row">
            <div className="login-checkbox-row">
              <input className="login-checkbox" type="checkbox" id="checkbox" />
              <label className="text-sm" htmlFor="checkbox">
                Remember me
              </label>
            </div>
            <a className="login-forgot" href="#">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
          <p className="login-bottom-text">
            Don’t have an account?{" "}
            <a className="login-signup-link" href="#">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};