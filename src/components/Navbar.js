import React, { useState } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = (props) => {


  return (
    <nav className="navbar navbar-expand-lg " style={{ backgroundColor: props.navBg }} >
      <div className="container-fluid">
        <Link className="navbar-brand" style={{ color: props.navText }} to="/">NewsMonkey</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link  `} style={{ color: props.navText }} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link  `} style={{ color: props.navText }} to="/business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link  `} style={{ color: props.navText }} to="/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link  `} style={{ color: props.navText }} to="/health">Health</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link  `} style={{ color: props.navText }} to="/science">Science</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link  `} style={{ color: props.navText }} to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link  `} style={{ color: props.navText }} to="/technology">Technology</Link>
            </li>
          </ul>
        </div>
        <button id='moon' onClick={props.handlerDarkMode} ><i className="fa-solid fa-moon"></i></button>
      </div>
    </nav>
  )
}

export default Navbar