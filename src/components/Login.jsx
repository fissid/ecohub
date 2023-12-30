import { useState } from "react";
import "../scss/Login.scss";
import image from "../img/minim/dashboard.png";
import mebis from "../img/minim/Mebis.png";
export default function Login({ userLoginHandler, signUpPageHandler }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [approved, setApproved] = useState(true);
  const [showPass, setShowPass] = useState(false);
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
  function signUpBtnHandler() {
    signUpPageHandler();
  }
  return (
    <div className="login">
      <div className="box">
        <form onSubmit={(e) => loginSubmit(e)}>
          <div className="header">
            <h3>Login</h3>
            <p>
              Doesn't have an account yet? <input type="button" value="Sign up" onClick={signUpBtnHandler} />
            </p>
          </div>
          <div className="email">
            <label htmlFor="email" className={`${!approved && "warn"}`}>
              Email Address:
            </label>
            <div className={`email__container ${!approved && "not-approved"}`}>
              <input id="email" name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="text" placeholder="@std.medipol.edu.tr" className="unavaialbe" disabled />
            </div>
          </div>

          <div className="pass">
            <label htmlFor="password" className={`${!approved && "warn"}`}>
              Password:
            </label>
            <input className={`${!approved && "not-approved"}`} id="password" name="password" type={`${showPass ? "text" : "password"}`} value={pass} onChange={(e) => setPass(e.target.value)} required />
            <span className="show-pass" onClick={() => setShowPass((prev) => !prev)}>
              {showPass ? "hide" : "show"} password
            </span>
          </div>

          <div className="footer">
            <button type="submit">Login</button>
          </div>
          <div className="footer-line">{approved ? <p>OR</p> : <p className="warn">Email or password is incorrect</p>}</div>
          <div className="footer-foot">
            <button>
              <p>Login With MEBİS</p> <img src={mebis} alt="" />
            </button>
          </div>
        </form>
        <img className="minimal" src={image} alt="" />
      </div>
    </div>
  );
}
