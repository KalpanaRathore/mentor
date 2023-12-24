import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top my_nav"  >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/" style={{color:'green', fontWeight:'bolder'}}>Mentor</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mynav_item">
                <li className="nav-item ">
                  <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="About">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="courses">courses</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Trainers">Trainers</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Contact">Contact</Link>
                </li>
                
                
              </ul>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Header