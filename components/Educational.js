import React from 'react';

const Educational = () => {
    return (
        <div className="cta-two">
            <div className="container-fluid">
                <div className="row no-gutters">
                    <div className="col-lg-6 thm-base-bg">
                        <div className="cta-two__single">
                            <div className="cta-two__icon">
                                <span><i className="kipso-icon-professor"></i></span>
                            </div>
                            <div className="cta-two__content">
                                <h2 className="cta-two__title">Mentorship Program</h2>
                                <p className="cta-two__text">There are many variations of passages of lore available
                                    but <br /> the
                                        majority have suffered alteration in some form.</p>
                                <a href="#" className="thm-btn cta-two__btn">Volunteer Today</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 thm-base-bg-2">
                        <div className="cta-two__single">
                            <div className="cta-two__icon">
                                <span><i className="kipso-icon-knowledge"></i></span>
                            </div>
                            <div className="cta-two__content">
                                <h2 className="cta-two__title">Education Programs</h2>
                                <p className="cta-two__text">From CodeCamps, Incubators, Accelerators, and skills based training and education, the Minority Programmers pedagogy is to continously learn.</p>
                                <a href="#" className="thm-btn cta-two__btn">Start Learning</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Educational;
