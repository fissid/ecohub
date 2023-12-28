import { useState } from "react";
import "../scss/Login.scss";
import image from "../img/minim/dashboard.png";
export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div className="login">
      <div className="box">
        <form>
          <div className="header">
            <h3>Login</h3>
            <p
              Doesn't have an account yet? <button>Sign Up</button>
            </p>
          </div>
          <div className="email">
            <label htmlFor="email">Email Address:</label>
            <input id="email" name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="pass">
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="text" value={pass} onChange={(e) => setPass(e.target.value)} required />
          </div>

          <div className="footer">
            <button type="submit">Login</button>
          </div>
          <div className="footer-line">
            <p>OR</p>
          </div>
          <div className="footer-foot">
            <button>Login With Mebis</button>
          </div>
        </form>
        <img src={image} alt="" />
      </div>
    </div>
  );
}
