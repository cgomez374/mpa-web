import React from "react";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import FeaturedMyCard from '../components/FeaturedMyCard'
import datas from '../helpers/mockData'

const FeaturedMyStartup = () => {
    const params = {
        slidesPerView: 3,
        loop: true,
        speed: 1000,
        spaceBetween: 0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        // Responsive breakpoints
        breakpoints: {
            1440: {
                slidesPerView: 3
            },
            1025: {
                slidesPerView: 3
            },
            1024: {
                slidesPerView: 2
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
            <section className="featured__wrapper">
                <div className='container'>
                    <div className='row'>
                        <div className="col-lg-3 col-md-12 featured__text">
                            <h2 className="featured__title">
                                My Startups
                            </h2>
                            <p className="featured__subtitle">
                                These are startups you have some shares in
                            </p>
                        </div>
                        <div className="col-lg-9 col-md-12 d-flex align-items-center justify-content-center ">
                            {!datas.length ?
                                (<div className="container text-center mt-3 mb-3 featured__card-empty">
                                    <h1 className="featured__card-title mb-3">You have not funded any startup yet</h1>
                                    <div className="btn__container">
                                        <a href="#" className="button btn-filled">Explore Startups</a>
                                    </div>
                                </div>) : (
                                    <Swiper {...params} grabCursor={true}>
                                        {datas.filter(data => data.shareOwner === "Yes")
                                            .map((d, i) => (
                                                <div className="item" key={i}>
                                                    <FeaturedMyCard data={d} />
                                                </div>
                                            ))}
                                    </Swiper>
                                )}
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};
export default FeaturedMyStartup;

