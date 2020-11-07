import React from "react";
import "./login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { addUser } from "../../redux";
import { useDispatch } from "react-redux";
export default function Login() {
  const dispatch = useDispatch();
  const signIn = async () => {
    try {
      const result = await auth.signInWithPopup(provider);
      console.log(result.user);
      dispatch(addUser(result.user));
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className="login">
      <div className="login__icon">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt="fb"
        />
        <p>Connect with friends and the world around you on Facebook.</p>
      </div>
      <div className="login__right">
        <div className="login__form">
          <div className="login__input">
            <input type="text" placeholder="Email or Phone Number" />
          </div>
          <div className="login__input">
            <input type="password" placeholder="Password" />
          </div>
          <Button color="primary" variant="contained" onClick={signIn}>
            Log In
          </Button>
          <span className="login__forgot">Forgot Password ?</span>
          <Button variant="contained" color="success">
            Create New Account
          </Button>
        </div>
        <p className="login__note">
          {/* <span>Create a Page</span> for a celebrity, band or business. */}
          <span>Message: </span> Press login and you'll be login through google.
        </p>
      </div>
    </div>
  );
}
