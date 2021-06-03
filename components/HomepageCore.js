import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const HomepageCore = () => {
    const params = {
        slidesPerView: 3,
        loop: true,
        speed: 1000,
        spaceBetween: 30,
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
            1024: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 2
            },
            640: {
                slidesPerView: 2

            },
            320: {
                slidesPerView: 1
            }
        }
    }

    return (
        <>
            <section className="homepage__core">
                <div className="heading__number"><h3>03</h3></div>
                <div className="container">
                    <h2 className="heading__title mt-5 mb-5">&lsaquo;Core_principles/&rsaquo;</h2>
                    <div className="row">
                        <Swiper {...params} >
                            <div className="col-lg-4 col-md-4 col-sm- col-xs-12 card__container-core">
                                <div className="card border-0 rounded-0">
                                    <div className="img-banner-core">
                                        <img src="/assets/images/core1.png" alt="" className="card-img-top rounded-0" />
                                        <div className="img-banner-core-container">
                                            <img src="/assets/images/core1.svg" alt="" className="card-img-banner-core pink" />
                                        </div>
                                    </div>
                                    <div className="card-body card-body-app">
                                        <p className="text-right"><a href="#" className="card-button">Diversity in stem</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 card__container-core">
                                <div className="card border-0 rounded-0">
                                    <div className="img-banner-core">
                                        <img src="/assets/images/core2.png" alt="" className="card-img-top rounded-0" />
                                        <div className="img-banner-core-container blue">
                                            <img src="/assets/images/core2.svg" alt="" className="card-img-banner-core blue" />
                                        </div>
                                    </div>
                                    <div className="card-body card-body-app">
                                        <p className="text-right"><a href="#" className="card-button">Software engineer</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 card__container-core">
                                <div className="card border-0 rounded-0">
                                    <div className="img-banner-core">
                                        <img src="/assets/images/core3.png" alt="" className="card-img-top rounded-0" />
                                        <div className="img-banner-core-container yellow">
                                            <img src="/assets/images/core3.svg" alt="" className="card-img-banner-core yellow" />
                                        </div>
                                    </div>
                                    <div className="card-body card-body-app">
                                        <p className="text-right"><a href="#" className="card-button">Entrepreneuship</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm- col-xs-12 card__container-core">
                                <div className="card border-0 rounded-0">
                                    <div className="img-banner-core">
                                        <img src="/assets/images/core4.png" alt="" className="card-img-top rounded-0" />
                                        <div className="img-banner-core-container">
                                            <img src="/assets/images/core4.svg" alt="" className="card-img-banner-core pink" />
                                        </div>
                                    </div>
                                    <div className="card-body card-body-app">
                                        <p className="text-right"><a href="#" className="card-button">interdisciplinary
                                            learning</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 card__container-core">
                                <div className="card border-0 rounded-0">
                                    <div className="img-banner-core">
                                        <img src="/assets/images/core5.png" alt="" className="card-img-top rounded-0" />
                                        <div className="img-banner-core-container blue">
                                            <img src="/assets/images/core5.svg" alt="" className="card-img-banner-core blue" />
                                        </div>
                                    </div>
                                    <div className="card-body card-body-app">
                                        <p className="text-right"><a href="#" className="card-button">Innovations</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 card__container-core">
                                <div className="card border-0 rounded-0">
                                    <div className="img-banner-core">
                                        <img src="/assets/images/core6.png" alt="" className="card-img-top rounded-0" />
                                        <div className="img-banner-core-container yellow">
                                            <img src="/assets/images/core6.svg" alt="" className="card-img-banner-core yellow" />
                                        </div>
                                    </div>
                                    <div className="card-body card-body-app">
                                        <p className="text-right"><a href="#" className="card-button">project-based
                                            learning</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm- col-xs-12 card__container-core">
                                <div className="card border-0 rounded-0">
                                    <div className="img-banner-core">
                                        <img src="/assets/images/core7.png" alt="" className="card-img-top rounded-0" />
                                        <div className="img-banner-core-container">
                                            <img src="/assets/images/core7.svg" alt="" className="card-img-banner-core pink" />
                                        </div>
                                    </div>
                                    <div className="card-body card-body-app">
                                        <p className="text-right"><a href="#" className="card-button">Professional
                                            development</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 card__container-core">
                                <div className="card border-0 rounded-0">
                                    <div className="img-banner-core">
                                        <img src="/assets/images/core8.png" alt="" className="card-img-top rounded-0" />
                                        <div className="img-banner-core-container blue">
                                            <img src="/assets/images/core8.svg" alt="" className="card-img-banner-core blue" />
                                        </div>
                                    </div>
                                    <div className="card-body card-body-app">
                                        <p className="text-right"><a href="#" className="card-button">activating
                                            passions</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 card__container-core">
                                <div className="card border-0 rounded-0">
                                    <div className="img-banner-core">
                                        <img src="/assets/images/core9.png" alt="" className="card-img-top rounded-0" />
                                        <div className="img-banner-core-container yellow">
                                            <img src="/assets/images/core9.svg" alt="" className="card-img-banner-core yellow" />
                                        </div>
                                    </div>
                                    <div className="card-body card-body-app">
                                        <p className="text-right"><a href="#" className="card-button">sense of
                                            community</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm- col-xs-12 card__container-core">
                                <div className="card border-0 rounded-0">
                                    <div className="img-banner-core">
                                        <img src="/assets/images/core10.png" alt="" className="card-img-top rounded-0" />
                                        <div className="img-banner-core-container">
                                            <img src="/assets/images/core10.svg" alt="" className="card-img-banner-core pink" />
                                        </div>
                                    </div>
                                    <div className="card-body card-body-app">
                                        <p className="text-right"><a href="#" className="card-button">training/
                                            onboarding</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 card__container-core">
                                <div className="card border-0 rounded-0">
                                    <div className="img-banner-core">
                                        <img src="/assets/images/core11.png" alt="" className="card-img-top rounded-0" />
                                        <div className="img-banner-core-container blue">
                                            <img src="/assets/images/core11.svg" alt="" className="card-img-banner-core blue" />
                                        </div>
                                    </div>
                                    <div className="card-body card-body-app">
                                        <p className="text-right"><a href="#" className="card-button">humanitarian
                                            focused</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 card__container-core">
                                <div className="card border-0 rounded-0">
                                    <div className="img-banner-core">
                                        <img src="/assets/images/core12.png" alt="" className="card-img-top rounded-0" />
                                        <div className="img-banner-core-container yellow">
                                            <img src="/assets/images/core12.svg" alt="" className="card-img-banner-core yellow" />
                                        </div>
                                    </div>
                                    <div className="card-body card-body-app">
                                        <p className="text-right"><a href="#" className="card-button">mentorship</a></p>
                                    </div>
                                </div>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomepageCore