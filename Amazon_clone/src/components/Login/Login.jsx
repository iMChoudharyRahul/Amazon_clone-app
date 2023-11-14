import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { DarkLogo } from "../../assets/ExportImg";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="login__logo">
          <img className="login__logo" src={DarkLogo} alt="logo" />
        </div>
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <label>E-mail or mobile phone number</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            placeholder="email or mobile number"
            className="input__box"
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />

          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p className="text-xs text-black leading-4 mt-4">
          By Continuing, you agree to Amazon&apos;s{" "}
          <span>
            {" "}
            <a
              href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940"
              target="_blank"
              rel="noreferrer"
              className="defaultLink"
            >
              Conditions of Use
            </a>{" "}
          </span>
          and{" "}
          <span className="">
            <a
              href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380"
              target="_blank"
              rel="noreferrer"
              className="defaultLink"
            >
              Privacy Notice.
            </a>
          </span>
        </p>
      </div>
      <div className="text-heading">New to Amazon?</div>
      <button className="login__registerButton" onClick={register}>
        Create your Amazon Account
      </button>
    </div>
  );
}

export default Login;
