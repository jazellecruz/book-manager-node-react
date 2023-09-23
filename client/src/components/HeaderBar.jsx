import React from 'react'
import AccountIcon from "../assets/5987424.png";
import "../styles/styles.css";

const HeaderBar = () => {
  return (
    <div className="header-bar">
      <p>Booked<span>.</span></p>
      <img className="user-icon" src={AccountIcon} alt="user-icon"></img>
    </div>
  )
}

export default HeaderBar
