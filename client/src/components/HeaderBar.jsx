import React from 'react'
import AccountIcon from "../assets/5987424.png";
import "../styles/styles.css";

const HeaderBar = () => {
  return (
    <div className="header-bar">
      <p className="header-name">Booked<span className="period"></span></p>
      <img className="user-icon" src={AccountIcon} alt="user-icon"></img>
    </div>
  )
}

export default HeaderBar
