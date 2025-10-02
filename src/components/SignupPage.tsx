import { useState } from "react";

export const SignupPage: React.FC = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {

      const response = await fetch("http://localhost/syntaxtree/register.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, email, password })
        });

      const data = await response.json();

      if (data.status === "success") {
        setMessage("✅ Account created successfully!");
      } else {
        setMessage("❌ " + data.message);
      }

    } catch (error) {
      console.error("Error:", error);
      setMessage("⚠️ Something went wrong. Try again later.");
    }

  }

  return (
    <div className="login-root">
      <div className="login-image-col">
        <h1 className="hp-headline">
          <span className="hp-gradient">#1</span> Knowkedge Sharing Platform for IT <span className="hp-gradient">Professionals</span>
        </h1>
        <p className="hp-subtext">Share your experience - Help others to learn & showcase your skils</p>
      </div>

      <div className="login-form-col" onSubmit={handleSubmit}>
        <form className="login-form">
          <h2 className="login-title">Sign Up</h2>
          <p className="login-desc">
            Welcome to SyntaxTree! Create your account to continue
          </p>

          <button type="button" className="login-google-btn">
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
              alt="googleLogo"
            />
          </button>

          <div className="login-divider-row">
            <div className="login-divider"></div>
            <p className="login-divider-text">or sign up with email</p>
            <div className="login-divider"></div>
          </div>

          <div className="login-input-row">
            <input
              type="text"
              placeholder="Username"
              className="login-input"
              onChange ={(e) => setUsername(e.target.value)}
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
              onChange ={(e) => setEmail(e.target.value)}
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
              onChange ={(e) => setPassword(e.target.value)}
              required

            />
          </div>

          <button type="submit" className="login-btn">
            Create Account
          </button>

          {message && <p style={{ marginTop: "10px" }}>{message}</p>}

        </form>
      </div>
    </div>
  );
}

export default SignupPage