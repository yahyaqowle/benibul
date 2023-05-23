import React from "react"
import { Link } from "react-router-dom";
import Add from "/home/codert/Documents/programming/benibul/src/img/sea otter.png"

export const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">BeniBul</span>
      <div className="user">
        <img src={Add} alt="Qowle1" />
        <span>Qowle</span>
        <button>
        <Link to="/login">Log out</Link></button>
      </div>
    </div>
  )
}

export default Navbar