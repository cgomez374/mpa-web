import React, { useRef } from "react";
import Carousel, { consts } from 'react-elastic-carousel';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import FeaturedInfoCard from "../components/FeaturedInfoCard"
import StartupRoadmap from '../components/StartupRoadmap'
import datas from '../components/mockData'

const Roadmap = [
    {
        year: "2019",
        target: "Launch on the app store with over 20k users unboarded and 5k monthly active users.",
    },
    {
        year: "2020",
        target: "Increased MAU to 5M+ users and generated over 400B+ in transaction volume",
    },
    {
        year: "2021",
        target: "Introduce merchant tags to allow online retail purchase with crypto.",
    },
    {
        year: "2022",
        target: "Release the private beta for P2P loan transaction",
    },
];


const StartupRightBar = ({ data }) => {
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
            <div className="row right__container pb-5">
                <div className="container p-4">
                    <div className="row container">
                        <h2 className="right__topic mb-3 mt-1">About startup</h2>
                    </div>
                    <div className="row container">
                        <p className="right__description">{data.about}</p>
                    </div>
                    <hr className="mt-4 mb-4" />
                    <div className="row container">
                        <h2 className="right__topic mb-3 mt-1">Vision</h2>
                    </div>
                    <div className="row container">
                        <p className="right__description">{data.vision}
                        </p>
                    </div>
                    <hr className="mt-4 mb-4" />
                    <div className="row container">
                        <h2 className="right__topic mb-3 mt-1">Roadmap</h2>
                    </div>
                    <div className="row">
                        {Roadmap.map((r, i) => (
                            <StartupRoadmap item={r} key={i} />
                        ))}
                    </div>
                </div >
            </div >

            <div className="row right__container">
                <div className="container p-4">
                    <h2 className="right__topic mb-3 mt-1">Related startups</h2>
                    <div>
                        {/* <Carousel breakPoints={breakPoints} pagination={false} >
                            {datas.map((d, i) => (
                                <FeaturedCard data={d} key={i} />
                            ))}
                        </Carousel> */}
                        <Swiper {...params} grabCursor={true}>
                            {datas.map((d, i) => (
                                <div className="item" key={i}>
                                    <FeaturedInfoCard data={d} />
                                </div>
                            ))}
                        </Swiper>
                    </div>

                </div>
            </div>


        </>
    );
};
export default StartupRightBar;

// https://stackoverflow.com/questions/61241989/responsive-stepper-with-only-css