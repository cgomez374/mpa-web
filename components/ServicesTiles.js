import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const ServicesTiles = () => {

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
        <section className="course-category-two">
            <div className="container text-center">
                <div className="inner-container">
                    <div className="block-title text-center">
                        <h2 className = "block-title__title"> Services</h2>

                    </div>
                    <div className="course-category-two__carousel">
                        <Swiper {...params}>
                        <div className="item">
                            <div className="course-category-two__single color-1">
                                <div className="course-category-two__icon">
                                    <i className="kipso-icon-manager"></i>
                                </div>
                                <h3 className="course-category-two__title"><a href="#">Mentorship</a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-two__single color-2">
                                <div className="course-category-two__icon">
                                    <i className="kipso-icon-knowledge"></i>
                                </div>
                                <h3 className="course-category-two__title"><a href="#">Education</a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-two__single color-3">
                                <div className="course-category-two__icon">
                                    <i className="kipso-icon-strategy"></i>
                                </div>
                                <h3 className="course-category-two__title"><a href="#">Consultancy</a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-two__single color-4">
                                <div className="course-category-two__icon">
                                    <i className="kipso-icon-email"></i>
                                </div>
                                <h3 className="course-category-two__title"><a href="#">Job Placement</a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-two__single color-5">
                                <div className="course-category-two__icon">
                                    <i className="kipso-icon-training"></i>
                                </div>
                                <h3 className="course-category-two__title"><a href="#">Career Development</a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-two__single color-6">
                                <div className="course-category-two__icon">
                                    <i className="kipso-icon-web-programming"></i>
                                </div>
                                <h3 className="course-category-two__title"><a href="#">Software Products</a></h3>
                            </div>
                        </div>

                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesTiles;
