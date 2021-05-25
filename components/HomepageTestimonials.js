import React, { useState } from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';


const HomepageTestimonials = () => {

    const TestimonialsCollection = [
        { id: 1, name: "Bryanna Turman", position: "Social Media Manager", quote: "MPA hits different. Its a whole gang of coders trying to put on for the world.", imgSrc: "https://minorityprogrammers.com/assets/images/Bryanna.svg" },
        { id: 2, name: "Seemaab Mujtaba", position: "Software Engineer Intern", quote: "MPA is the most fun work experience I had and I always had a place to express my ideas!", imgSrc: "https://minorityprogrammers.com/assets/images/Seemaab.svg" },

    ];

    const AllyTile = [
        { allyLink: "https://mason360.gmu.edu/bam/", imgSrc: "assets/images/brand-1-1.png" },
        { allyLink: "https://aisnet.org/", imgSrc: "assets/images/ais.png" },
        { allyLink: "https://devpost.com/", imgSrc: "assets/images/devpost.png" },
        { allyLink: "https://thelastmile.org/", imgSrc: "assets/images/lastmile.png" },
        { allyLink: "https://blockchainedu.org/", imgSrc: "assets/images/ben.png" },
        { allyLink: "https://blockchainedu.org/", imgSrc: "assets/images/cgi.png" }
    ];

    const [swiper, setSwiper] = useState(null);
    const [click, setClick] = useState(false)

    const goNext = () => {
        if (swiper !== null) {
            swiper.slideNext();
            setClick(!click)
        }
    };

    const goPrev = () => {
        if (swiper !== null) {
            swiper.slidePrev();
            setClick(!click)
        }
    };

    const params = {
        slidesPerView: 3,
        loop: true,
        speed: 1000,
        spaceBetween: 30,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },

        // Responsive breakpoints
        breakpoints: {
            1024: {
                slidesPerView: 5
            },
            768: {
                slidesPerView: 4
            },
            640: {
                slidesPerView: 3

            },
            320: {
                slidesPerView: 1
            }
        }
    }

    const sponsor = () => {

    }

    return (
        <>
            <section className="homepage__testimonials">
                <div className="heading__number"><h3>06</h3></div>
                <div className="container">
                    <div className="heading__title-container">
                        <h2 className={click ? "heading__title mt-5 mb-5 mr-5 heading-clicked" : "heading__title mt-5 mb-5 mr-5"}>&lsaquo;Testimonials/&rsaquo;</h2>
                        <h2 className={!click ? "heading__title mt-5 mb-5 heading-clicked" : "heading__title mt-5 mb-5 mr-3"}>&lsaquo;Past_sponsors/&rsaquo;</h2>
                    </div>
                    <Swiper getSwiper={setSwiper}>
                        <div className="container">
                            {TestimonialsCollection.map((t, i) => (
                                <div className="row homepage__testimonials-container mt-3" key={i}>
                                    <div className="homepage__testimonials-left m-2">
                                        <img src={t.imgSrc} className="rounded-circle" alt={t.name} />
                                    </div>
                                    <div className="homepage__testimonials-right m-4">
                                        <h4>{t.quote}</h4>
                                        <p className="overline">{t.name}, {t.position}</p>
                                    </div>

                                </div>
                            ))}

                            {/* <div className="homepage__testimonials-button text-center">
                                <a href="#" className="button btn-gradient">View all Testimonials</a>
                            </div> */}
                        </div>
                        <div className="container">
                            <div className="row homepage__testimonials-sponsor">
                                {AllyTile.map((allies, index) => (
                                    <div className="col-lg-4 col-md-6 sponsor-col" key={index}>
                                        <div className="item sponsor-item">
                                            <a href={allies.allyLink} target="_blank">
                                                <img src={allies.imgSrc} width="200px" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Swiper>
                </div>
                <div className="homepage-carousel-btn">
                    <div onClick={goPrev} className="homepage-carousel-btn__left-btn banner-arrow"><i className="fas fa-arrow-left"></i></div>
                    <div onClick={goNext} className="homepage-carousel-btn__right-btn banner-arrow"><i className="fas fa-arrow-right"></i></div>
                </div>

                {/* <Swiper {...params}>
                    {AllyTile.map((allies, index) => (
                        <div className="item" key={index}>
                            <a href={allies.allyLink} target="_blank">
                                <img src={allies.imgSrc} width="500px" alt="" />
                            </a>
                        </div>

                    ))}
                </Swiper> */}
            </section>

        </>
    )
}

export default HomepageTestimonials