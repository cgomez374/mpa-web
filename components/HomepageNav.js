import React, { useState, useEffect, useRef } from 'react'
import Link from "next/link";
import HomepageNavDropdown from './HomepageNavDropdown';
import HomepageNavLoggedin from './HomepageNavLoggedin';
import HomepageNavLogin from './HomepageNavLogin';
import { useDetectOutsideClick } from './UseDetectOutsideClick';

const HomepageNav = () => {
    const dropdownRef = useRef(null);
    const dropdownMobileRef = useRef(null);
    const searchMobileRef = useRef(null);
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [sticky, setSticky] = useState(false)
    const [isLogin, setIsLogin] = useState(true)

    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const [isActiveMobile, setIsActiveMobile] = useDetectOutsideClick(dropdownMobileRef, false);
    const [isActiveSearch, setIsActiveSearch] = useDetectOutsideClick(searchMobileRef, false);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const onClick = () => setIsActive(!isActive);
    const onClickMobile = () => setIsActiveMobile(!isActiveMobile)
    const onClickSearch = () => setIsActiveSearch(!isActiveSearch)

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

    const showSearchIconMobile = () => (
        <div className={`nav__mobile-search ${sticky ? 'sticky' : ''}`} ref={searchMobileRef}>
            <div className="mobile-searchBox">
                <input className="mobile-searchInput" type="text" name="" placeholder="Search" />
                <button className="mobile-searchButton" href="#" onClick={onClickSearch}>
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>

    )

    const menuMobile = () => (
        <>
            <div className={`nav__mobile ${sticky ? 'sticky' : ''}`} ref={dropdownMobileRef} >
                {isLogin ?
                    <div className="nav__mobile-profile">
                        <div className="nav__mobile-img">
                            <img src="/assets/images/shot.svg" alt="profile" className="rounded-circle mb-3" />
                            <p>Welcome back, Shot</p>
                        </div>
                        <button className="btn btn-warning btn-dropdown-filled" onClick={handleClick}>Sign Out</button>
                    </div>
                    :
                    <div className="mobile__register">
                        <button className="btn btn-pink mr-3 ml-3" onClick={handleClick}>Sign in</button>
                        <p className="mr-3 ml-3">OR</p>
                        <button className="btn btn-yellow mr-3 ml-3" onClick={handleClick}>Register</button>
                    </div>
                }

                <ul className="nav__mobile-items">
                    <li className='nav-item'>
                        <div className="nav__mobile-link">
                            <a href='#'
                                onClick={closeMobileMenu}>
                                Learn
                            </a>
                            <i className="fas fa-chevron-right mobile-arrow"></i>
                        </div>
                    </li>
                    <li className='nav-item '>
                        <div className="nav__mobile-link">
                            <a href='#'
                                onClick={closeMobileMenu}>
                                Incubator
                            </a>
                            <i className="fas fa-chevron-right mobile-arrow"></i>
                        </div>
                    </li>
                    <li className='nav-item'>
                        <div className="nav__mobile-link">
                            <a href='#'
                                onClick={closeMobileMenu}>
                                Mentorship
                            </a>
                            <i className="fas fa-chevron-right mobile-arrow"></i>
                        </div>
                    </li>
                    <li className='nav-item'>
                        <div className="nav__mobile-link">
                            <a href='#'
                                onClick={closeMobileMenu}>
                                Events
                            </a>
                            <i className="fas fa-chevron-right mobile-arrow"></i>
                        </div>
                    </li>
                    <li className='nav-item'>
                        <div className="nav__mobile-link">
                            <a href='#'
                                onClick={closeMobileMenu}>
                                Careers
                            </a>
                            <i className="fas fa-chevron-right mobile-arrow"></i>
                        </div>
                    </li>
                    <li className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <div className="nav__mobile-link">
                            <a
                                href='#'
                                onClick={extendEle}
                            >
                                Consultancy
                            </a>
                            {dropdown ? <i className="fas fa-chevron-down mobile-arrow"></i> : <i className="fas fa-chevron-right mobile-arrow"></i>}

                            {dropdown && <HomepageNavDropdown onCloseMobileMenu={closeMobileMenu} />}
                        </div>
                    </li>
                </ul>
                {isLogin ? <ul className="nav__mobile-items">
                    <li className="nav-item">
                        <div className="nav__mobile-link">
                            <a href='/dashboard'
                                onClick={closeMobileMenu}>
                                Dashboard
                            </a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav__mobile-link">
                            <a href='#'
                                onClick={closeMobileMenu}>
                                Messages
                            </a>
                            <p className="mobile__social msg">2</p>
                        </div>
                    </li>
                    <li className='nav-item'>
                        <div className="nav__mobile-link">
                            <a href='#'
                                onClick={closeMobileMenu}>
                                Notifications
                            </a>
                            <p className="mobile__social notification">3</p>
                        </div>
                    </li>
                </ul> : ""}
                <div className="mobile__vote">
                    <div className="mobile__wallet-link">
                        <a href="#" className="">Connect Wallet</a>
                    </div>
                    <div className="mobile__vote-link">
                        <a href="#" className=""><i className="far fa-check-circle"></i>Vote</a>
                    </div>
                </div>
            </div>
        </>
    )


    return (
        <>
            <header className="homepage__header">
                <div className="homepage__topbar">
                    <div className="container">
                        <ul className="topbar__right">
                            {isLogin ?
                                <>
                                    <li>
                                        <i className="fas fa-envelope"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-bell"></i>
                                    </li>
                                </> : ""}
                            <li className="topbar__login" ref={dropdownRef}>
                                <i className="fas fa-user" onClick={onClick}></i>
                                {isActive ? (isLogin ? <HomepageNavLoggedin onCloseMobileMenu={onClick} /> : <HomepageNavLogin onCloseMobileMenu={onClick} />) : ""}
                            </li>
                            <li>
                                <div className="searchBox">
                                    <input className="searchInput" type="text" name="" placeholder="Search" />
                                    <button className="searchButton">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </li>
                            <li>
                                <a href="#" className="topbar__text">Connect Wallet</a>
                            </li>
                            <li>
                                <a href="#" className="topbar__vote">
                                    <i className="far fa-check-circle"></i>Vote
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
                <nav className={` ${sticky ? 'sticky-menu' : ''}`} >
                    <div className="container homepage__navbar">
                        <div className="navbar-logo">
                            <Link href='/index-4' onClick={closeMobileMenu}>
                                <img src="assets/images/mpicon.svg" />
                            </Link>
                        </div>
                        <div className="mobile-icon">
                            <ul className="topbar__mobile">
                                <li>
                                    <i className="fas fa-search" onClick={onClickSearch}></i>
                                </li>
                                <li onClick={onClickMobile}>
                                    <i className={isActiveMobile ? 'fas fa-times' : 'fas fa-bars'} />
                                </li>
                            </ul>
                        </div>
                        {isActiveMobile ? menuMobile() : ""}
                        {isActiveSearch ? showSearchIconMobile() : ""}
                        {/* <ul className={click ? 'nav-menu active' : 'nav-menu'}> */}
                        <ul className="nav-menu">
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
                                    href='#'
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