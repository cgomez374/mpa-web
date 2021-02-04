import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const BrandsTwo = () => {

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
                    <h2 className="block-title__title">Ally Organizations</h2>
                </div>
                <div className="brand-one__carousel">
                    <Swiper {...params}>
                        <div className="item">
                            <img src="assets/images/brand-1-1.png" width="123px" alt="" />
                        </div>
                        {/* <div className="item">
                            <img src="assets/images/kpmg.svg" width="123px" alt="" />
                        </div> */}
                        <div className="item">
                            <img src="assets/images/fast.png" width="123px" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/ais.png" width="123px" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/devpost.png" width="123px" alt="" />
                        </div>
                        {/* <div className="item">
                            <img src="assets/images/sap.png" width="123px" alt="" />
                        </div> */}
                        <div className="item">
                            <img src="assets/images/lastmile.png" width="123px" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/ben.png" width="123px" alt="" />
                        </div>

                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default BrandsTwo;
