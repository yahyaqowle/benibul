// import React from "react";
import { Link } from "react-router-dom";
import Add from "/home/codert/Documents/programming/benibul/src/img/addAvatar.png";
import Register from "./Register";

// 

import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";

// 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Beni Bul</span>
        <span className="title">Giris yap</span>
        <form onSubmit={Login}>
          <input 
          type="email" placeholder="email"  
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
          <input 
          type="password" placeholder="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit"> Giris yap</button>
        </form>
        <p>
          Hesabiniz mi yok? <Link to="/register">Kaydol</Link>

          <p>
           Go to Home <Link to="/Home">Home</Link>
          </p>
        </p>
      </div>
    </div>
  );
};

export default Login;
