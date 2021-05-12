import React, { useRef } from "react";
import Carousel, { consts } from 'react-elastic-carousel';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import FeaturedInfoCard from "../components/FeaturedInfoCard"
import StartupRoadmap from '../components/StartupRoadmap'
import datas from '../helpers/mockData'

const Roadmap = [
    {
        id: 1,
        year: "2019",
        date: "Jan 1st",
        title: "Launch",
        target: "Launch on the app store with over 20k users unboarded and 5k monthly active users.",
    },
    {
        id: 2,
        year: "2020",
        date: "Aug 11th",
        title: "Increased",
        target: "Increased MAU to 5M+ users and generated over 400B+ in transaction volume",
    },
    {
        id: 3,
        year: "2021",
        date: "Apr 20th",
        title: "Introduce",
        target: "Introduce merchant tags to allow online retail purchase with crypto.",
    },
    {
        id: 4,
        year: "2022",
        date: "May 25th",
        title: "Release",
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
                    {/* <div className="row">
                        {Roadmap.map((r, i) => (
                            <StartupRoadmap item={r} key={i} />
                        ))}
                    </div> */}

                    <div className="tw-relative tw-container tw-mx-auto tw-px-2 tw-flex tw-flex-col tw-space-y-8 tw-bg-white">
                        <div className="tw-absolute tw-z-0 tw-w-2 tw-h-full tw-bg-profileDark tw-left-7 2xl:tw-mx-auto 2xl:tw-right-0 2xl:tw-left-0"
                        ></div>

                        {Roadmap.map((r, i) => (
                            <StartupRoadmap item={r} key={i} />
                        ))}


                        {/* <div className="tw-relative tw-z-10">
                            <div className="tw-w-12 tw-h-12 tw-rounded-full tw-flex tw-justify-center tw-items-center tw-bg-profileDark tw-font-semibold tw-text-sm tw-text-white tw-shadow-md 2xl:tw-absolute 2xl:tw-mx-auto 2xl:tw-left-0 2xl:tw-right-0">
                                2018
                            </div>
                            <div className="tw-relative tw-pt-2 tw-z-10 2xl:tw-pl-15 2xl:tw-pt-0 2xl:tw-w-1/2 2xl:tw-ml-auto 2xl:tw-pl-16">
                                <div className="tw-bg-white tw-p-3 tw-rounded-md tw-shadow-lg tw-border">
                                    <span
                                        className="tw-font-bold tw-text-primary-200 tw-text-sm tw-tracking-wide">
                                        Jan 2021
                                    </span>
                                    <h1 className="tw-text-2xl tw-font-bold tw-pt-1">
                                        Launch
                                    </h1>
                                    <p className="tw-pt-1 tw-leading-relaxed tw-tracking-wide">
                                        Launch on the app store with over 20k users unboarded and 5k monthly active users.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="tw-relative tw-z-10">
                            <div className="tw-w-12 tw-h-12 tw-rounded-full tw-flex tw-justify-center tw-items-center tw-bg-profileDark tw-font-semibold tw-text-sm tw-text-white tw-shadow-md 2xl:tw-absolute 2xl:tw-mx-auto 2xl:tw-left-0 2xl:tw-right-0">
                                2018
                            </div>

                            <div className="tw-relative tw-pt-2 tw-z-10 2xl:tw-pl-15 2xl:tw-pt-0 2xl:tw-w-1/2 2xl:tw-ml-0 2xl:tw-mr-auto 2xl:tw-pl-0 2xl:tw-pr-16">
                                <div className="tw-bg-white tw-p-3 tw-rounded-md tw-shadow-lg tw-border">
                                    <span
                                        className="tw-font-bold tw-z-10 tw-text-primary-200 tw-text-sm tw-tracking-wide">
                                        Jan 2021
                                    </span>
                                    <h1 className="tw-text-2xl tw-font-bold tw-pt-1">
                                        Launch
                                    </h1>
                                    <p className="tw-pt-1 tw-leading-relaxed tw-tracking-wide">
                                        Launch on the app store with over 20k users unboarded and 5k monthly active users.
                                    </p>
                                </div>
                            </div>
                        </div>
 */}




                    </div>


                    {/* <div className="tw-container tw-bg-white tw-mx-auto tw-w-full tw-h-auto">
                        <div className="tw-relative tw-wrap tw-overflow-hidden tw-p-2 tw-h-auto">
                            <div className="tw-border-2-2 tw-absolute tw-border-opacity-20 tw-border-gray-700 tw-h-full tw-border" style={{ left: "50%" }}></div>
                            <!-- right timeline -->
                            <div className="tw-mb-8 tw-flex tw-justify-between tw-items-center tw-w-full tw-right-timeline">
                                <div className="tw-order-1 tw-w-5/12"></div>
                                <div className="tw-z-20 tw-flex tw-items-center tw-order-1 tw-bg-profileDark tw-shadow-xl tw-w-15 tw-h-15 tw-p-3 tw-rounded-full">
                                    <h1 className="tw-mx-auto tw-font-semibold tw-text-lg tw-text-white">2018</h1>
                                </div>
                                <div className="tw-order-1 tw-bg-gray-400 tw-rounded-lg tw-shadow-xl tw-w-5/12 tw-px-6 tw-py-4">
                                    <h3 className="tw-mb-3 tw-font-bold tw-text-gray-800 tw-text-xl">Launch</h3>
                                    <p className="tw-text-sm tw-leading-snug tw-tracking-wide tw-text-gray-900 text-opacity-100">Launch on the app store with over 20k users unboarded and 5k monthly active users.</p>
                                </div>
                            </div>

                            <!-- left timeline -->
                            <div className="tw-mb-8 tw-flex tw-justify-between tw-flex-row-reverse tw-items-center tw-w-full tw-left-timeline">
                                <div className="tw-order-1 tw-w-5/12"></div>
                                <div className="tw-z-20 tw-flex tw-items-center tw-order-1 tw-bg-profileDark tw-shadow-xl tw-w-15 tw-h-15 tw-p-3 tw-rounded-full">
                                    <h1 className="tw-mx-auto tw-text-white tw-font-semibold tw-text-lg">2019</h1>
                                </div>
                                <div className="tw-order-1 tw-bg-red-400 tw-rounded-lg tw-shadow-xl tw-w-5/12 tw-px-6 tw-py-4">
                                    <h3 className="tw-mb-3 tw-font-bold tw-text-white tw-text-xl">Increase MAU</h3>
                                    <p className="tw-text-sm tw-font-medium tw-leading-snug tw-tracking-wide tw-text-white text-opacity-100">Increased MAU to 5M+ users and generated over 400B+ in transaction volume</p>
                                </div>
                            </div>

                            <!-- right timeline -->
                            <div className="tw-mb-8 tw-flex tw-justify-between tw-items-center tw-w-full tw-right-timeline">
                                <div className="tw-order-1 tw-w-5/12"></div>
                                <div className="tw-flex-shrink tw-z-20 tw-flex tw-items-center tw-order-1 tw-bg-profileDark tw-shadow-xl tw-w-12 tw-h-12 tw-p-2 tw-rounded-full">
                                    <h1 className="tw-mx-auto tw-font-semibold tw-text-sm tw-text-white">2020</h1>
                                </div>
                                <div className="tw-order-1 tw-bg-gray-400 tw-rounded-lg tw-shadow-xl tw-w-5/12 tw-px-6 tw-py-4">
                                    <h3 className="tw-mb-3 tw-font-bold tw-text-gray-800 tw-text-xl">Introduce</h3>
                                    <p className="tw-text-sm tw-leading-snug tw-tracking-wide tw-text-gray-900 text-opacity-100">Introduce merchant tags to allow online retail purchase with crypto.</p>
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div >

                {/* Roadmap */}

                {/* <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card roadmap-card">
                                <div className="card-body">
                                    <h4 className="card-title mb-5">Horizontal Timeline</h4>

                                    <div className="hori-timeline" dir="ltr">
                                        <ul className="list-inline events">
                                            <li className="list-inline-item event-list">
                                                <div className="px-4">
                                                    <div className="event-date bg-soft-primary text-primary">2 June</div>
                                                    <h5 className="font-size-16">Event One</h5>
                                                    <p className="text-muted">It will be as simple as occidental in fact it will be Occidental Cambridge friend</p>

                                                </div>
                                            </li>
                                            <li className="list-inline-item event-list">
                                                <div className="px-4">
                                                    <div className="event-date bg-soft-success text-success">5 June</div>
                                                    <h5 className="font-size-16">Event Two</h5>
                                                    <p className="text-muted">Everyone realizes why a new common language one could refuse translators.</p>
                                                </div>
                                            </li>
                                            <li className="list-inline-item event-list">
                                                <div className="px-4">
                                                    <div className="event-date bg-soft-danger text-danger">7 June</div>
                                                    <h5 className="font-size-16">Event Three</h5>
                                                    <p className="text-muted">If several languages coalesce the grammar of the resulting simple and regular</p>
                                                </div>
                                            </li>
                                            <li className="list-inline-item event-list">
                                                <div className="px-4">
                                                    <div className="event-date bg-soft-danger text-danger">7 June</div>
                                                    <h5 className="font-size-16">Event Three</h5>
                                                    <p className="text-muted">If several languages coalesce the grammar of the resulting simple and regular</p>
                                                </div>
                                            </li>




                                        </ul>
                                    </div>
                                </div>
                         
                        </div>
                    </div>
                </div > */}



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
            </div>

        </>
    );
};
export default StartupRightBar;

// https://stackoverflow.com/questions/61241989/responsive-stepper-with-only-css