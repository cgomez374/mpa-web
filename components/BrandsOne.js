import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const BrandsOne = () => {

    const params = {
        slidesPerView : 5,
        loop: true,
        speed: 1000,
        spaceBetween : 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },

        // Responsive breakpoints
        breakpoints: {
            1024:{
                slidesPerView : 5
            },
            768:{
                slidesPerView : 4
            },
            640:{
                slidesPerView : 3

            },
            320:{
                slidesPerView : 2
            }
        }
    }

    return (
        <section className="brand-two ">
            <div className="container">
                <div className="block-title">
                    <h2 className="block-title__title">Our Past Sponsors</h2>
                </div>
                <div className="brand-one__carousel">
                    <Swiper {...params}>
                        <div className="item">
                            <a href="https://www.accenture.com/" target="_blank">
                                <img src="assets/images/accenture.png" width="123px" alt=""/></a>
                        </div>
                        <div className="item">
                            <a href="https://www.cgi.com/en" target="_blank">
                                <img src="assets/images/cgi.png" padding="1em" width="123px" alt="" />
                            </a>
                        </div>
                        <div className="item">
                            <a href="https://www.captechconsulting.com/" target="_blank">
                                <img src="assets/images/caotech.png" padding="1em" width="123px" alt="" />
                            </a>
                        </div>
                        <div className="item">
                            <a href="https://www.jmu.edu/cise/cs/" target="_blank">
                                <img src="assets/images/jmucs.png" padding="1em" width="123px" alt="" />
                            </a>
                        </div>
                        <div className="item">
                            <a href="https://www.jmu.edu/cob/" target="_blank">
                                <img src="assets/images/jmucob.png" padding="1em" width="123px" alt="" />
                            </a>
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default BrandsOne;
