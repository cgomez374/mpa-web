import React from 'react';

const EventTypes = () => {
    return (
        <section className="course-category-three">
            <img src="/assets/images/circle-stripe.png" className="course-category-three__circle" alt="" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="course-category-three__single">
                                <img src="/assets/images/lecture.jpg" width="270px" height="304px" alt="" />
                                    <div className="course-category-three__content">
                                        <h3 className="course-category-three__title"><a href="#">Lectures/Webinars </a></h3>
                                        <p className="course-category-three__text">On the latest topics</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="course-category-three__single">
                                <img src="/assets/images/conference.jpg" width="270px" height="304px" alt="" />
                                    <div className="course-category-three__content">
                                        <h3 className="course-category-three__title"><a href="#">Workshops/Conferences </a></h3>
                                        <p className="course-category-three__text">Hands on training</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="course-category-three__single">
                                <img src="/assets/images/code.jpg" width="270px" height="304px" objectFit="cover" alt="" />
                                    <div className="course-category-three__content">
                                        <h3 className="course-category-three__title"><a href="#">Hackathons</a></h3>
                                        <p className="course-category-three__text">Compete for Prizes</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="course-category-three__single">
                                <img src="/assets/images/robot.jpg" width="270px" height="304px" alt="" />
                                    <div className="course-category-three__content">
                                        <h3 className="course-category-three__title"><a href="#">Incubators/Accelerators</a></h3>
                                        <p className="course-category-three__text">Start your tech business</p>
                                    </div>
                            </div>
                        </div>
                    </div>

                </div>
        </section>
    );
};

export default EventTypes;
