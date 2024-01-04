import Icon from "./Icon";
import "../scss/SignUp.scss";
import { useState } from "react";
export default function SignUp({ userLoginHandler, loginPageHandler }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [approved, setApproved] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState("");
  // saeed.salehi@std.medipol.edu.tr
  function loginSubmit(e) {
    e.preventDefault();
    setApproved(true);
    if (email.includes("@")) {
      setApproved(false);
      return;
    }
    userLoginHandler(email, pass);
  }
  function loginBtnHandler() {
    loginPageHandler();
  }
  return (
    <div className="sign-up">
      <div className="box">
        <form onSubmit={(e) => loginSubmit(e)}>
          <div className="header">
            <h3>Sign Up</h3>
            <p>
              Already have an account? <input type="button" value="Login" onClick={loginBtnHandler} />
            </p>
          </div>

          <div className="name form-box">
            <label htmlFor="name">Full Name:</label>
            <input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <div className="email form-box">
            <label htmlFor="email">Email Address:</label>
            <div className="email__container">
              <input id="email" name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="text" placeholder="@std.medipol.edu.tr" className="unavaialbe" disabled />
            </div>
          </div>

          <div className="pass form-box">
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type={`${showPass ? "text" : "password"}`} value={pass} onChange={(e) => setPass(e.target.value)} required />
            <span className="show-pass" onClick={() => setShowPass((prev) => !prev)}>
              {showPass ? "hide" : "show"} password
            </span>
          </div>

          <div className="footer">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
