import React from 'react';
import Link from 'next/link';
// import Person from "../components/Person";

const MeetTeam = () => {
    return (
        // <Person></Person>
        <section id="team" className="team-one team-page">
            <div className="container">
            <div className="block-title text-center">
                    <h2 className="block-title__title">Meet the <br />
                        Team</h2>
                </div>
                <div className="row">
                    {/* <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="https://www.minorityprogrammers.org/img/shot.svg"  height="206px" width="206px" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name"><Link href="/teacher-details"><a>Shot K</a></Link></h2>
                                <p className="team-one__designation">President</p>
                                <p className="team-one__text">A C.S graduate, and founder of MPA.</p>
                            </div>
                            <div className="team-one__social">
                                <a href="#"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="/assets/images/shad (3).svg" height="206px" width="206px" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name">{/*<Link href="/teacher-details"><a>Shadman Hossain</a></Link>*/}Shadman Hossain</h2>
                                <p className="team-one__designation">Secretary</p>
                                <p className="team-one__text"></p>
                            </div>
                            <div className="team-one__social">
                                {/* <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="/assets/images/tahmid (1).svg"  height="206px" width="206px" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name">{/*<Link href="/teacher-details"><a>Tahmid Biswas</a></Link>*/}Tahmid Biswas</h2>
                                <p className="team-one__designation">Treasurer</p>
                                <p className="team-one__text"></p>
                            </div>
                            <div className="team-one__social">
                                {/* <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-github"></i></a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="/assets/images/jillian.jpg"  height="206px" width="206px" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name">{/*<Link href="/teacher-details"><a>Jillian Lynch</a></Link>}Jillian Lynch*/}Jillian Lynch</h2>
                                <p className="team-one__designation">Hackathon Sponsorship Coordinator</p>
                                <p className="team-one__text"></p>
                            </div>
                            <div className="team-one__social">
                                {/* <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-github"></i></a> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="/assets/images/roshaan (1).svg"  height="206px" width="206px" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name">{/*<Link href="/teacher-details"><a>Tahmid Biswas</a></Link>*/}Roshaan Khan</h2>
                                <p className="team-one__designation">Product/Strategy</p>
                                <p className="team-one__text"></p>
                            </div>
                            <div className="team-one__social">
                                {/* <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-github"></i></a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="/assets/images/gideon.jpg"  height="206px" width="206px" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name">{/*<Link href="/teacher-details"><a>Rosada Francis-Cedeño</a></Link>*/}Gideon Nnalue</h2>
                                <p className="team-one__designation">Software Engineer</p>
                                <p className="team-one__text"></p>
                            </div>
                            <div className="team-one__social">
                                {/* <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-github"></i></a> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="/assets/images/rosie.jpg"  height="206px" width="206px" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name">{/*<Link href="/teacher-details"><a>Rosada Francis-Cedeño</a></Link>*/}Rosada Francis-Cedeño</h2>
                                <p className="team-one__designation">Social Media Manager</p>
                                <p className="team-one__text"></p>
                            </div>
                            <div className="team-one__social">
                                {/* <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-github"></i></a> */}
                            </div>
                        </div>
                    </div>


                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="/assets/images/jack.jpg"  height="206px" width="206px" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name">{/*<Link href="/teacher-details"><a>Jack Vandemeulebroecke</a></Link>*/}Jack Vandemeulebroecke</h2>
                                <p className="team-one__designation">Software Engineer & Instructor</p>
                                <p className="team-one__text"></p>
                            </div>
                            <div className="team-one__social">
                                {/* <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-github"></i></a> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="/assets/images/SEEF.svg"  height="206px" width="206px" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name">{/*<Link href="/teacher-details"><a>Jack Vandemeulebroecke</a></Link>*/}Seef Manj</h2>
                                <p className="team-one__designation">Technical Recruiter</p>
                                <p className="team-one__text"></p>
                            </div>
                            <div className="team-one__social">
                                {/* <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-github"></i></a> */}
                            </div>
                        </div>
                    </div>



                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="https://se-infra-cdn-images.azureedge.net/documents/11/5adee849-9037-45e0-da87-08d850ce0b0e/1500.jpg"  height="206px" width="206px" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name">{/*<Link href="/teacher-details"><a>Marc Duny</a></Link>*/}Marc Duny</h2>
                                <p className="team-one__designation">Outreach Coordinator</p>
                                <p className="team-one__text"></p>
                            </div>
                            <div className="team-one__social">
                                {/* <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-github"></i></a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="/assets/images/zed (2).svg"  height="206px" width="206px" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name">{/*<Link href="/teacher-details"><a>Marc Duny</a></Link>*/}Zvinodashe Mupambirei</h2>
                                <p className="team-one__designation">Cryptocurrency/ Blockchain R&D Intern</p>
                                <p className="team-one__text"></p>
                            </div>
                            <div className="team-one__social">
                                {/* <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-github"></i></a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="/assets/images/wesley.svg"  height="206px" width="206px" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name">{/*<Link href="/teacher-details"><a>Marc Duny</a></Link>*/}Wesley Luong</h2>
                                <p className="team-one__designation">Web Development Intern</p>
                                <p className="team-one__text"></p>
                            </div>
                            <div className="team-one__social">
                                {/* <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-github"></i></a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="/assets/images/bridget.svg"  height="206px" width="206px" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name">{/*<Link href="/teacher-details"><a>Marc Duny</a></Link>*/}Bridget Shannon</h2>
                                <p className="team-one__designation">Web Development Intern</p>
                                <p className="team-one__text"></p>
                            </div>
                            <div className="team-one__social">
                                {/* <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-github"></i></a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="/assets/images/shengqi.svg"  height="206px" width="206px" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name">{/*<Link href="/teacher-details"><a>Marc Duny</a></Link>*/}Shengqi Zhou</h2>
                                <p className="team-one__designation">Business Development Intern</p>
                                <p className="team-one__text"></p>
                            </div>
                            <div className="team-one__social">
                                {/* <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-github"></i></a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="/assets/images/daniel.svg"  height="206px" width="206px" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name">{/*<Link href="/teacher-details"><a>Marc Duny</a></Link>*/}Daniel Kleinman</h2>
                                <p className="team-one__designation">Grant Researcher Intern</p>
                                <p className="team-one__text"></p>
                            </div>
                            <div className="team-one__social">
                                {/* <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-github"></i></a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="/assets/images/fahad.svg"  height="206px" width="206px" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name">{/*<Link href="/teacher-details"><a>Rosada Francis-Cedeño</a></Link>*/}Fahad Zakir</h2>
                                <p className="team-one__designation">Web Development Intern</p>
                                <p className="team-one__text"></p>
                            </div>
                            <div className="team-one__social">
                                {/* <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-github"></i></a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="/assets/images/kush.jpg"  height="206px" width="206px" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name">{/*<Link href="/teacher-details"><a>Kush Gupta</a></Link>*/}Kush Gupta</h2>
                                <p className="team-one__designation">JMU Chapter President</p>
                                <p className="team-one__text"></p>
                            </div>
                            <div className="team-one__social">
                                {/* <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-github"></i></a> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                            <img src="/assets/images/abel.jpg"  height="206px" width="206px" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name">{/*<Link href="/teacher-details"><a>Abele Aynekulu</a></Link>*/}Abele Aynekulu</h2>
                                <p className="team-one__designation">JMU Chapter Vice-President</p>
                                <p className="team-one__text"></p>
                            </div>
                            <div className="team-one__social">
                                {/* <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-github"></i></a> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="/assets/images/james.jpg"  height="206px" width="206px" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name">{/*<Link href="/teacher-details"><a>Professor Jim Jewett</a></Link>*/}Professor Jim Jewett</h2>
                                <p className="team-one__designation">JMU COB Faculty Advisor</p>
                                <p className="team-one__text"></p>
                            </div>
                            <div className="team-one__social">
                                {/* <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-github"></i></a> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="/assets/images/ramon.jpg"  height="206px" width="206px" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name">{/*<Link href="/teacher-details"><a>Dr. Ramon Mata-Toledo</a></Link>*/}Dr. Ramon Mata-Toledo</h2>
                                <p className="team-one__designation">JMU CS Faculty Advisor</p>
                                <p className="team-one__text"></p>
                            </div>
                            <div className="team-one__social">
                                {/* <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-github"></i></a> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="/assets/images/michelle.jpg"  height="206px" width="206px" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name">{/*<Link href="/teacher-details"><a>Michelle Wong</a></Link>*/}Michelle Wong</h2>
                                <p className="team-one__designation">JMU Chapter Treasurer</p>
                                <p className="team-one__text"></p>
                            </div>
                            <div className="team-one__social">
                                {/* <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-github"></i></a> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="/assets/images/grace.jpg"  height="206px" width="206px" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name">{/*<Link href="/teacher-details"><a>Grace Bailey</a></Link>*/}Grace Bailey</h2>
                                <p className="team-one__designation">JMU Chapter Professional Development Coordinator</p>
                                <p className="team-one__text"></p>
                            </div>
                            <div className="team-one__social">
                                {/* <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-github"></i></a> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="/assets/images/myles.jpg"  height="206px" width="206px" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name">{/*<Link href="/teacher-details"><a>Myles Patterson</a></Link>*/}Myles Patterson</h2>
                                <p className="team-one__designation">JMU Chapter Events Coordinator</p>
                                <p className="team-one__text"></p>
                            </div>
                            <div className="team-one__social">
                                {/* <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-github"></i></a> */}
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </section>
    );
};

export default MeetTeam;
