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
                <div className='sign-out' style={{order: "2"}}>
                    <i class="fa fa-sign-out" aria-hidden="true" style={{ color: "white", fontSize: "2.2em", cursor: "pointer" }}></i>
                </div>
                <div className='qr-code' style={{order: "1"}}>
                     <i class="fa fa-qrcode" aria-hidden="true" style={{ color: "white", fontSize: "2.2em", cursor: "pointer"}}></i>
                </div>
                {/* <LogoutIcon style={{color:"white"}} fontSize="large"/> */}
            </div>
        </div>
    )
}

export default Navbar