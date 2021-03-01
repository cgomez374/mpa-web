import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const Testimonials = () => {

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

    return (
        <section className="testimonials-one testimonials-one__home-three">
            <div className="container">
                <div className="block-title text-center">
                    <h2 className="block-title__title">What our members<br />
                        are saying</h2>
                </div>
                <div className="testimonials-one__carousel">
                    <Swiper {...params}>
                        <div className="item">
                            <div className="testimonials-one__single">
                                <div className="testimonials-one__qoute">
                                    <img src="/assets/images/qoute-1-1.png" alt="" />
                                </div>
                                <p className="testimonials-one__text">Minority Programmers is not only where I learned the skills I use in my job today, but its where I found family.</p>
                                <img src="https://www.minorityprogrammers.org/img/kush.jpg" alt="" className="testimonials-one__img" />
                                    <h3 className="testimonials-one__name">Kush Gupta</h3>
                                    <p className="testimonials-one__designation">Chapter Head</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonials-one__single">
                                <div className="testimonials-one__qoute">
                                    <img src="/assets/images/qoute-1-1.png" alt="" />
                                </div>
                                <p className="testimonials-one__text">Minority Programmers gave me hands-on experience organizing.</p>
                                <img src="https://se-infra-cdn-images.azureedge.net/documents/11/5adee849-9037-45e0-da87-08d850ce0b0e/1500.jpg" alt="" className="testimonials-one__img" />
                                    <h3 className="testimonials-one__name">Marc Duny</h3>
                                    <p className="testimonials-one__designation">Student Organizer</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonials-one__single">
                                <div className="testimonials-one__qoute">
                                    <img src="/assets/images/qoute-1-1.png" alt="" />
                                </div>
                                <p className="testimonials-one__text">Minority Programmers encouraged me to be a tech entreprenuer.</p>
                                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGPiGQMw0aPwA/profile-displayphoto-shrink_800_800/0/1592918804007?e=1617840000&v=beta&t=a7IkDSp-cgW_1Vj8scERV06r5mUYalXns7H2s_epCgk" alt="" className="testimonials-one__img" />
                                    <h3 className="testimonials-one__name">Ozzy Omar</h3>
                                    <p className="testimonials-one__designation">IT Professional</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonials-one__single">
                                <div className="testimonials-one__qoute">
                                    <img src="/assets/images/qoute-1-1.png" alt="" />
                                </div>
                                <p className="testimonials-one__text">Minority Programmers gave me diverse friends that felt cooler than any regular CS club.</p>
                                <img src="https://www.minorityprogrammers.org/img/jack.jpg" alt="" className="testimonials-one__img" />
                                    <h3 className="testimonials-one__name">Jack V</h3>
                                    <p className="testimonials-one__designation">Software Engineer</p>
                            </div>
                        </div>
                       
          
     

                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
