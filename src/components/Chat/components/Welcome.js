import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import logo from '../img/logo.png';

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <main className="welcome">
      <h2 style={{width: '16vw'}}>Welcome to UWC-Chat</h2>
      <img src={logo} alt="ReactJs logo" width={40} height={50} style={{marginLeft: '5.7vw'}}/>
      <p style={{width: '16vw'}}>Sign in with Google to chat with with your colleagues.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
          style={{marginLeft: '1.2vw'}}
        />
      </button>
    </main>
  );
};

export default Welcome;
