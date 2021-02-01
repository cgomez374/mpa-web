import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import Link from 'next/link';

const UpcomingEvents = () => {

    const params = {
        slidesPerView : 3,
        loop: true,
        speed: 1000,
        spaceBetween : 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },

        // Responsive breakpoints
        breakpoints: {
            1024:{
                slidesPerView : 3
            },
            768:{
                slidesPerView : 2
            },
            640:{
                slidesPerView : 2

            },
            320:{
                slidesPerView : 1
            }
        }
    }
    return (
        <div>
        <section className="course-one__top-title home-one">
            <div className="container">
                <div className="block-title mb-0">
                    <h2 className="block-title__title">Our<br />
                    Events</h2>
                </div>
            </div>
            <div className="course-one__top-title__curve"></div>
        </section>

        <section className="course-one course-one__teacher-details home-one">
            <div className="container">
                <div className="course-one__carousel">

                    <Swiper {...params} >
                  
                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="/assets/images/resume.jpg" width="370px" height="243px" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">Workshop</a>
                                <h2 className="course-one__title"><Link href="/course-details"><a>Resume Workshop</a></Link>
                                </h2>
                                <div className="course-one__meta">
                                    <a href="/course-details"><i className="far fa-clock"></i>February</a>
                                </div>
                                <a href="#" className="course-one__link">Pre-Register</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="/assets/images/ch.png" width="370px" height="243px" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">Hackathon</a>
                                <h2 className="course-one__title"><Link href="/course-details"><a>#ClimateChangeHacks</a></Link>
                                </h2>
                                <div className="course-one__meta">
                                    <a href="/course-details"><i className="far fa-clock"></i>Sunday April 24 - Saturday April 25, 2021</a>
                                </div>
                                <a href="#" className="course-one__link">Sign Up</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="/assets/images/incubator.png" width="370px" height="243px" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">Incubator</a>
                                <h2 className="course-one__title"><Link href="/course-details"><a>Minority Incubator</a></Link>
                                </h2>
                                <div className="course-one__meta">
                                    <a href="/course-details"><i className="far fa-clock"></i>Summer</a>
                                </div>
                                <a href="#" className="course-one__link">Pre-Register</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="/assets/images/award.jpg" width="370px" height="243px" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">Conference</a>
                                <h2 className="course-one__title"><Link href="/course-details"><a>2021 Minority Programmers Awards</a></Link>
                                </h2>
                                <div className="course-one__meta">
                                    <a href="/course-details"><i className="far fa-clock"></i>June</a>
                                </div>
                                <a href="#" className="course-one__link">Pre-Register</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="/assets/images/computer2.jpg" width="370px" height="243px" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">Workshop</a>
                                <h2 className="course-one__title"><Link href="/course-details"><a>MinorityCodeCamp</a></Link>
                                </h2>
                                <div className="course-one__meta">
                                    <a href="/course-details"><i className="far fa-clock"></i>Summer</a>
                                </div>
                                <a href="#" className="course-one__link">Pre-Register</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="/assets/images/accelerator.png" width="370px" height="243px" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">Accelerator</a>
                                <h2 className="course-one__title"><Link href="/course-details"><a>Minority Accelerator</a></Link>
                                </h2>
                                <div className="course-one__meta">
                                    <a href="/course-details"><i className="far fa-clock"></i>Late Summer</a>
                                </div>
                                <a href="#" className="course-one__link">Pre-Register</a>
                            </div>
                        </div>
                    </div>
                  
                  



        

                    </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default UpcomingEvents;