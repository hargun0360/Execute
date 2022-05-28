import React from 'react'
import illustrate from '../../Assets/logo1.svg'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='logo'>
                <div className='logo-image'>
                    <img className="image" src={illustrate} alt="logo" />
                </div>
                <div className='logo-head'>
                    <p>Qwait?</p>
                </div>

            </div>
            <div className='Nav-menu'>
                <i class="fa fa-sign-out" aria-hidden="true" style={{ color: "white", fontSize: "2.2em" }}></i>
            </div>
        </div>
    )
}

export default Navbar