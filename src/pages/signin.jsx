import React from 'react';
import './signin.css';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../components/firebase';
import { toast } from 'react-toastify';

const Signin = ({ setUser }) => {
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        console.log(result);
        if (result.user) {
          toast.success("User logged in successfully", {
            position: "center",
          });
          setUser(result.user); // Update user state in the App component
        }
      })
      .catch((error) => {
        toast.error("Login failed: " + error.message, {
          position: "center",
        });
      });
  };

  return (
    <div className="signin-container">
      <form className="signin-form">
        <h2>Sign In</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="signin-button">Sign In</button>
      </form>
      <div className="social-login">
        <p>or continue with</p>
        <button className="social-button google-button" onClick={googleLogin}>Google</button>
        <button className="social-button facebook-button">Facebook</button>
      </div>
    </div>
  );
};

export default Signin;
