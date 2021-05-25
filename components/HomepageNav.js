import React, { useState, useEffect, useRef } from 'react'
import Link from "next/link";
import HomepageNavDropdown from './HomepageNavDropdown';
import HomepageNavLoggedin from './HomepageNavLoggedin';
import HomepageNavLogin from './HomepageNavLogin';
import { useDetectOutsideClick } from './UseDetectOutsideClick';

const HomepageNav = () => {
    const dropdownRef = useRef(null);
    const dropdownMobileRef = useRef(null);
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [sticky, setSticky] = useState(false)
    const [isLogin, setIsLogin] = useState(false)

    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const [isActiveMobile, setIsActiveMobile] = useDetectOutsideClick(dropdownMobileRef, false);


    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const onClick = () => setIsActive(!isActive);
    const onClickMobile = () => setIsActiveMobile(!isActiveMobile)


    const onMouseEnter = () => {
        setDropdown(true)
    };

    const onMouseLeave = () => {
        setDropdown(false);
    };

    const extendEle = () => {
        dropdown ? setDropdown(false) : setDropdown(true)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 70) {
                setSticky(true)
            } else if (window.scrollY < 70) {
                setSticky(false)
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <header className="homepage__header">
                <div className="homepage__topbar">
                    <div className="container">
                        <ul className="topbar__right">
                            <li className="topbar__login" ref={dropdownRef}>
                                <i className="fas fa-user" onClick={onClick}></i>
                                {isActive ? (!isLogin ? <HomepageNavLoggedin onCloseMobileMenu={onClick} /> : <HomepageNavLogin onCloseMobileMenu={onClick} />) : ""}
                            </li>
                            <li>
                                <i className="fas fa-search"></i>
                            </li>
                        </ul>
                    </div>

                </div>
                <nav className={`navbar ${sticky ? 'sticky-menu' : ''}`} >
                    <div className="container">
                        <div className="navbar-logo">
                            <Link href='/' onClick={closeMobileMenu}>
                                <img src="assets/images/mpicon.svg" />
                            </Link>
                        </div>
                        <div className="mobile-icon">
                            <div className='menu-icon' onClick={handleClick}>
                                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                            </div>
                            <ul className="topbar__mobile">
                                <li ref={dropdownMobileRef}>
                                    <i className="fas fa-user" onClick={onClickMobile}></i>
                                    {isActiveMobile ? (!isLogin ? <HomepageNavLoggedin onCloseMobileMenu={onClick} /> : <HomepageNavLogin onCloseMobileMenu={onClick} />) : ""}
                                </li>
                                <li>
                                    <i className="fas fa-search"></i>
                                </li>
                            </ul>
                        </div>

                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link href='/index-4' className='nav-links' onClick={closeMobileMenu}>
                                    <a>HOME</a>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    href='/learn'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    <a>LEARN</a>
                                </Link>

                            </li>
                            <li className='nav-item'>
                                <Link
                                    href='/incubator'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    <a>INCUBATOR</a>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    href='/mentorship'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    <a>MENTORSHIP</a>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    href='/events'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    <a>EVENTS</a>
                                </Link>
                            </li>
                            <li className='nav-item'
                            >
                                <Link
                                    href='/careers'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    <a>CAREERS</a>
                                </Link>
                            </li>
                            <li className='nav-item'
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                            >
                                <Link
                                    href='#'
                                    className='nav-links'
                                    onClick={extendEle}
                                >
                                    <a>CONSULTANCY</a>
                                </Link>
                                {dropdown && <HomepageNavDropdown onCloseMobileMenu={closeMobileMenu} />}
                            </li>
                        </ul>

                    </div>
                </nav>

            </header>


        </>
    )
}

export default HomepageNav