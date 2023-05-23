import React from "react";
import { Link } from "react-router-dom";
import Add from "/home/codert/Documents/programming/benibul/src/img/addAvatar.png";
import Register from "./Register";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Beni Bul</span>
        <span className="title">Giris yap</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button> Giris yap</button>
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
