import React, { useState } from 'react'
import Link from "next/link";


const HomepageNavLogin = ({ onCloseMobileMenu }) => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);

    return (
        <>
            <div className={click ? 'dropdown-login clicked' : 'dropdown-login'}>
                <div className="dropdown-login-icons" >
                    <a href="#"><img src="assets/images/google.svg" alt="google icon" /></a>
                    <img src="assets/images/linkedin.svg" alt="linkedin icon" />
                    <img src="assets/images/github.svg" alt="github icon" />
                    <img src="assets/images/facebook.svg" alt="facebook icon" />
                </div>
                <form action="" className="login-form mt-2">
                    <div className="form-group login-input">
                        <label htmlFor="email">*Email address</label>
                        <input type="email" className="form-control fas" id="email" aria-describedby="emailHelp" placeholder="&#xf0e0; Enter email" required />
                    </div>
                    <div className="form-group login-input">
                        <label htmlFor="password">*Password</label>
                        <input type="password" className="form-control fas" id="password" aria-label="enter password" placeholder="&#xf023; Password" required />
                    </div>

                    <small id="password" className="form-text dropdown-form-text mb-3"><a href="#">Forgot password?</a></small>
                    <button type="submit" className="btn btn-warning btn-dropdown-filled">Sign In</button>
                </form>
                <div className="login-register mt-2">
                    <p className="mb-2">Don't have an account?</p>
                    <div className="dropdown-login-button">
                        <a href="/register" className="btn btn-outline-warning" onClick={handleClick}>Register</a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HomepageNavLogin