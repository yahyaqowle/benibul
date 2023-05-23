// import React from "react";
import { Link } from "react-router-dom";
import Add from "/home/codert/Documents/programming/benibul/src/img/addAvatar.png";
// 
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";

// 
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const Register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
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
        <span className="title">Kaydol</span>
        <form onSubmit={Register}>
          <input 
          type="text" placeholder="display name" />
          <input 
          type="email" placeholder="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
          <input 
          type="password" placeholder="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Profil ekle</span>
          </label>
          <button type="submit">Sign up</button>
        </form>
        <p>
          Hesabin mi var? <Link to="/login">Giris yap</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
