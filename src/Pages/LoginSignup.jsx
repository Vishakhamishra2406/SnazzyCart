import React, { useState } from 'react';
import "../CSS/LoginSignup.css";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        // Login
        await signInWithEmailAndPassword(auth, email, password);
        alert("Logged in successfully!");
      } else {
        // Sign Up
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account created successfully!");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>

        <form onSubmit={handleSubmit} className='loginsignup-fields'>
          {!isLogin && (
            <input
              type='text'
              placeholder='Your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type='email'
            placeholder='Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type='password'
            placeholder='Your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isLogin ? "Login" : "Continue"}</button>
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <p className='loginsignup-login'>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span
            style={{ cursor: 'pointer', color: 'blue' }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up here" : "Login here"}
          </span>
        </p>

        {!isLogin && (
          <div className='loginsignup-agree'>
            <input type='checkbox' id='terms' required />
            <p>
              By continuing, I agree to the <b>terms of use</b> and <b>privacy policy</b>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
