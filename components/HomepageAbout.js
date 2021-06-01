import React, { useState } from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import ModalVideo from 'react-modal-video';

const HomepageAbout = () => {
    const [swiper, setSwiper] = useState(null);
    const [isOpen, setOpen] = useState(false)

    const goNext = () => {
        if (swiper !== null) {
            swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiper !== null) {
            swiper.slidePrev();
        }
    };
    return (
        <>
            <section className="homepage__about">
                <div className="heading__number"><h3>01</h3></div>
                <div className="container">
                    <Swiper getSwiper={setSwiper}>
                        <div className="heading__container">
                            <div className="homepage__about-left">
                                <h2 className="heading__title mt-5 mb-5">&lsaquo;ABOUT_US/&rsaquo;</h2>
                                <p className="lead">We are an international network of developers unifying together to build socially impactful projects &amp; spread STEM education to marginalized communities.</p>
                            </div>
                            <div className="homepage__about-right">
                                <img src="/assets/images/globe.svg" className="heading__img" />
                                <button name="play" onClick={() => setOpen(true)}></button>
                            </div>

                        </div>
                        <div className="heading__container">
                            <div className="homepage__about-left">
                                <h2 className="heading__title mt-5 mb-5">&lsaquo;OUR_PEOPLE/&rsaquo;</h2>
                                <p className="lead">We are a place for minorities to come meet friends, gain guidance, and learn relevant IT skills to become a world leader in tech.</p>
                            </div>
                            <div className="homepage__about-right resize">
                                <img src="/assets/images/about2.2.svg" className="heading__img" />
                                <img src="/assets/images/about2.1.svg" className="heading__img" />
                                <button name="play" onClick={() => setOpen(true)}></button>
                            </div>
                        </div>
                        <div className="heading__container">
                            <div className="homepage__about-left">
                                <h2 className="heading__title mt-5 mb-5">&lsaquo;OUR_VISION/&rsaquo;</h2>
                                <p className="lead">Complete turnkey decentralized vertical integration for scaling minority startups from ideation to large scale businesses using decentralized protocols.</p>
                            </div>
                            <div className="homepage__about-right">
                                <img src="/assets/images/about4.svg" className="heading__img" />
                                <button name="play" onClick={() => setOpen(true)}></button>
                            </div>
                        </div>
                        <div className="heading__container">
                            <div className="homepage__about-left">
                                <h2 className="heading__title mt-5 mb-5">&lsaquo;FOR_COMPANIES/&rsaquo;</h2>
                                <p className="lead">We are a one-stop-shop for companies to recruit, train, and onboard diverse talent that cares about advancing the community through technology</p>
                            </div>
                            <div className="homepage__about-right">
                                <img src="/assets/images/about5.svg" className="heading__img" />
                                <button name="play" onClick={() => setOpen(true)}></button>
                            </div>

                        </div>
                        <div className="heading__container">
                            <div className="homepage__about-left">
                                <h2 className="heading__title mt-5 mb-5">&lsaquo;OUR_APP/&rsaquo;</h2>
                                <p className="lead">We are a community run platform that gives minorities access to opportunities via; ideas, resources, mentorship, education, and access to capital all through a lifelong community</p>
                            </div>
                            <div className="homepage__about-right resize">
                                <img src="/assets/images/about3.svg" className="heading__img" />
                                <button name="play" onClick={() => setOpen(true)}></button>
                            </div>
                        </div>

                    </Swiper>
                    <ModalVideo channel='youtube' isOpen={isOpen} videoId='VZmd8EOj3UA' onClose={() => setOpen(false)} />
                </div>
                <div className="homepage-carousel-btn">
                    <div onClick={goPrev} className="homepage-carousel-btn__left-btn banner-arrow"><i className="fas fa-arrow-left"></i></div>
                    <div onClick={goNext} className="homepage-carousel-btn__right-btn banner-arrow"><i className="fas fa-arrow-right"></i></div>
                </div>
            </section>

        </>
    )
}

export default HomepageAbout

