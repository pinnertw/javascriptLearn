import React from 'react'
import "./navbar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faPlane, faTaxi, faToriiGate } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbarContainer">
        <div className="lineOne">
          <div className="left">
            <span className="logo">SAM.BOOKING</span>
          </div>
          <div className="right">
            <button className='navButtonFlag'/>
            <button className='navButtonNotif'>Use webpack test</button>
            <button className='navButton'>Register</button>
            <button className='navButton'>Login</button>
          </div>
        </div>
        <div className="lineTwo">
          <div className="item active">
            <FontAwesomeIcon icon={faBed} />
            <span>Hotels</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Plane</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faToriiGate} />
            <span>Activities</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
