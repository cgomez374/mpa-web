import React, {Component} from 'react';
import Link from 'next/link';

class NavOne extends Component {
    constructor(){
        super()
        this.state = {
          sticky: false
        };
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);

        //Mobile Menu
        this.mobileMenu();

        //Search Toggle
        this.serachButton();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {

      if (window.scrollY > 70) {
        this.setState({
            sticky: true
        });
      } else if (window.scrollY < 70) {
        this.setState({
            sticky: false
        });
      }

    }

    mobileMenu = () => {
        //Mobile Menu Toggle
        let mainNavToggler = document.querySelector(".menu-toggler");
        let mainNav = document.querySelector(".main-navigation");

        mainNavToggler.addEventListener("click", function () {
            mainNav.style.display = ( (mainNav.style.display != "block" ? "block" : "none" ) );
        });
    }

    serachButton = () => {
        let searchToggle = document.querySelector(".search-toggle");
        let searchPopup = document.querySelector(".search-popup");
        let searchClose = document.querySelector(".cancel");
        let searchOverlay = document.querySelector(".search-overlay");

        searchToggle.addEventListener("click", function () {
            searchPopup.classList.add('active');
        });

        searchClose.addEventListener("click", function () {
            searchPopup.classList.remove('active');
        });

        searchOverlay.addEventListener("click", function () {
            searchPopup.classList.remove('active');
        });
    }

    render() {
        return (
            <header className="site-header site-header__header-one ">
                <nav className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${this.state.sticky ? 'stricked-menu stricky-fixed' : ''}`}>
                    <div className="container clearfix">
                        <div className="logo-box clearfix">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src="/assets/images/mp_gradient_rock.svg" className="main-logo" width="128"
                                         alt="MPA Logo" />
                                </a>
                            </Link>
                            <div className="header__social">
                            <a href="https://twitter.com/minorityprogram"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.facebook.com/MinorityProgrammers"><i className="fab fa-facebook-square"></i></a>
                                <a href="https://linkedin.com/company/minority-programmers/"><i className="fab fa-linkedin"></i></a>
                                <a href="https://www.instagram.com/minorityprogrammers/"><i className="fab fa-instagram"></i></a>


                            </div>
                            <button className="menu-toggler">
                                <span className="kipso-icon-menu"></span>
                            </button>
                        </div>
                        <div className="main-navigation">
                            <ul className=" navigation-box">
                                <li className="current">
                                    <Link href="/about"><a>About</a></Link>
                                    <ul className="sub-menu">
                                        <li><Link href="/about#our-story"><a>Our Story</a></Link></li>
                                        <li><Link href="/about#mission"><a>Mission</a></Link></li>
                                        <li><Link href="/about#vision"><a>Vision</a></Link></li>
                                        <li><Link href="/about#meet-the-team"><a>Meet The Team</a></Link></li>
                                    </ul>
                                </li>
    
                                <li>
                                    <a href="/courses">Services</a>
                                    <ul className="sub-menu">
                                        <li><Link href="/courses"><a>Consultancy</a></Link></li>
                                        <li><Link href="/course-details"><a>Mentorship</a></Link></li>
                                        <li><a href="#">Professional Development</a>
                                            <ul className="sub-menu">
                                                <li><Link href="/"><a>Networking</a></Link></li>
                                                <li><Link href="/index-2"><a>Skills Workshops</a></Link></li>
                                                <li><Link href="/index-3"><a>Onboarding/Training</a></Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/teachers"><a>Events</a></Link>
                                    <ul className="sub-menu">
                                        <li><Link href="/news"><a>Lectures</a></Link></li>
                                        <li><Link href="/news-details"><a>Workshops</a></Link></li>
                                        <li><Link href="/news-details"><a>Hackathons</a></Link></li>
                                        <li><Link href="/news-details"><a>Incubators</a></Link></li>
                                        <li><Link href="/news-details"><a>Accelerators</a></Link></li>
                                        <li><Link href="/news-details"><a>Conferences</a></Link></li>

                                    </ul>
                                </li>
                                <li>
                                    <Link href="/news"><a>Learn</a></Link>
                                    <ul className="sub-menu">
                                        <li><Link href="/teachers"><a>CodeCamp</a></Link>
                                            <ul className="sub-menu">
                                                <li><Link href="/teacher-details"><a>Blockchain</a></Link></li>
                                                <li><Link href="/become-teacher"><a>Full-Stack</a></Link></li>
                                                <li><Link href="/become-teacher"><a>Web-Development</a></Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="/courses"><a>MPUniversity</a></Link></li>

                                    </ul>
                                </li>
                                <li>
                                    <Link href="/contact"><a>Join</a></Link>
                                    <ul className="sub-menu">
                                        <li><Link href="/news"><a>Mentoring</a></Link></li>
                                        <li><Link href="/news-details"><a>Join Chapter</a></Link></li>
                                        <li><Link href="/news-details"><a>Start Chapter</a></Link></li>
                                        <li><Link href="/news-details"><a>Sponsor</a></Link></li>
                                        <li><Link href="/news-details"><a>Careers</a></Link></li>
                                        <li><Link href="/news-details"><a>Become A Partner</a></Link></li>

                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="right-side-box">
                            <a className="header__search-btn search-popup__toggler search-toggle" href="#"><i
                                className="kipso-icon-magnifying-glass"></i>
                            </a>
                        </div>
                    </div>
                </nav>
                <div className="site-header__decor">
                    <div className="site-header__decor-row">
                        <div className="site-header__decor-single">
                            <div className="site-header__decor-inner-1"></div>
                        </div>
                        <div className="site-header__decor-single">
                            <div className="site-header__decor-inner-2"></div>
                        </div>
                        <div className="site-header__decor-single">
                            <div className="site-header__decor-inner-3"></div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default NavOne;