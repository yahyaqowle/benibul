import React from "react"
import Add from "/home/codert/Documents/programming/benibul/src/img/addAvatar.png"

const Login = () => {
  return (
    <div className="formContainer">
        
     <div className="formWrapper">
     <span className="logo">Beni Bul</span>
     <span className="title" >Giris yap</span>
        <form>
            <input type="email" placeholder="email"/>
            <input type="password" placeholder="password"/>
            <button> Giris yap</button>
        </form>
        {/* <p>Hesabiniz mi yok? Kaydol </p> */}
        <p>Hesabiniz mi yok?
          <a href="Register.jsx">Kaydol</a>
        </p>
     </div>
    </div>
    
  )
}

export default Login