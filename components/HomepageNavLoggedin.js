import React, { useState } from 'react'

const HomepageNavLoggedin = ({ onCloseMobileMenu }) => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);
    //console.log(click)

    return (
        <>
            <div className={click ? 'dropdown-login clicked' : 'dropdown-login'}>
                <p className="mb-3">Welcome back, Shot</p>
                <div className="dropdown-login-img">
                    <img src="/assets/images/shot.svg" alt="profile" className="rounded-circle mb-3" />
                </div>
                <div className="login-options mb-3">
                    <a href="/dashboard" onClick={handleClick}><p className="login-options-profile">Dashboard</p></a>
                    <a href="#" onClick={handleClick}><p className="login-options-setting">Settings</p></a>
                </div>
                <div className="dropdown-login-button">
                    <button className="btn btn-warning btn-dropdown-filled" onClick={handleClick}>Sign Out</button>
                </div>
            </div>
        </>
    )
}

export default HomepageNavLoggedin