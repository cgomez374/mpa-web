import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import Link from 'next/link';
import EventCard from "../components/EventCard";

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
   const Events = [
        {imgSrc: "/assets/images/resume.jpg", catName: "Workshop", eventName: "Resume Workshop", time: "February", eventLink: "/events", actionLink: "/", callToAction: "Pre-Register"},
        {imgSrc: "/assets/images/ch.png", catName: "Hackathon", eventName: "#ClimateHacks", time: "Sunday April 24 - Saturday April 25, 2021", eventLink: "https://climatehacks.dev/", actionLink: "https://climatehacks.devpost.com/", callToAction: "Sign Up"},          
        {imgSrc: "/assets/images/defisummerthumb.svg", catName: "Hackathon", eventName: "#DefiSummerHacks", time: "All June 2021", eventLink: "https://defisummer.dev/", actionLink: "https://defi.devpost.com/", callToAction: "Sign Up"}      
          
      ];
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

                    <Swiper >
                     {Events.map((events, index) => ( 
                   <EventCard item={events} key={index}/> 
                    ))}
                    </Swiper> 
                   </div>
                </div>
            </section>
        </div>
    );
}
export default UpcomingEvents;