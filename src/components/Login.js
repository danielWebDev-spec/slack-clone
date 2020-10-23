import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "../firebase";
import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-970-80.jpg.webp"
          alt="Slack Logo"
        />
        <h1>Sign in to Clever Programmer</h1>
        <p>cleverprogrammer.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
