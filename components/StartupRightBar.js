import React, { useRef } from "react";
import Head from 'next/head';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import FeaturedInfoCard from "../components/FeaturedInfoCard"
import StartupRoadmap from '../components/StartupRoadmap'
import datas from '../helpers/mockData'

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
                <Head>
                    {process.env.NODE_ENV !== 'production' && (
                        <link rel="stylesheet" type="text/css" href={'/_next/static/css/styles.chunk.css?v=' + Date.now()} />
                    )}
                </Head>
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
                    <div className="tw-relative tw-container tw-mx-auto tw-px-2 tw-flex tw-flex-col tw-space-y-8 tw-bg-white">
                        <div className="tw-absolute tw-z-0 tw-w-2 tw-h-full tw-bg-profileDark tw-left-7 2xl:tw-mx-auto 2xl:tw-right-0 2xl:tw-left-0"
                        >
                        </div>
                        {data.roadmap.map((r, i) => (
                            <StartupRoadmap item={r} key={i} />
                        ))}
                    </div>
                </div >


                <div className="row right__container">
                    <div className="container p-4">
                        <h2 className="right__topic mb-3 mt-1">Related startups</h2>
                        <div>
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
            </div>

        </>
    );
};
export default StartupRightBar;

