import React from "react";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import FeaturedCard from '../components/FeaturedCard'
import datas from '../components/mockData'

const FeaturedStartups = ({ data }) => {

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
            <div className="col-lg-3 featured__text">
              <h2 className="featured__title">
                Featured Startups
              </h2>
              <p className="featured__subtitle">
                Invest in the next billion dollar company today
              </p>
            </div>
            <div className="col-lg-9 d-flex align-items-center featured__card">
              <Swiper {...params} grabCursor={true}>
                {datas.map((d, i) => (
                  <div className="item" key={i}>
                    <FeaturedCard data={d} key={i} />
                  </div>
                ))}
              </Swiper>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
export default FeaturedStartups;

