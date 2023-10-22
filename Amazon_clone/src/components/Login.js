import React, { useState } from "react";
import "../style/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

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
          <h2 className="login__logoTitle">Amazon</h2>
        </div>
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
      <br></br>
      <div className="from__footer">
        © 1996-2023, Amazon.com, Inc. or its affiliates
      </div>
      <div className="from__footer">
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
        {/* and{" "} */}
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
      </div>
    </div>
  );
}

export default Login;
