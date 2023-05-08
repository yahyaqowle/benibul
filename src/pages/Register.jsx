import React from "react"
import Add from "/home/codert/Documents/programming/benibul/src/img/addAvatar.png"

const Register = () => {
  return (
    <div className="formContainer">
        
     <div className="formWrapper">
     <span className="logo">Beni Bul</span>
     <span className="title">Kaydol</span>
        <form>
            <input type="text" placeholder="display name"/>
            <input type="email" placeholder="email"/>
            <input type="password" placeholder="password"/>
            <input style={{display:"none"}}type="file" id="file"/>
            <label htmlFor="file">
              <img src={Add} alt="" />
              <span>Profil ekle</span>
            </label>
            <button> Sign up</button>
        </form>
        <p>Hesabin mi var? Giris yap</p>
     </div>
    </div>
    
  )
}

export default Register