import React from 'react';

const Chapter = () => {
    return (
        <div className="cta-two">
            <div className="container-fluid">
                <div className="row no-gutters">
                <div className="col-lg-6 thm-base-bg-2">
                        <div className="cta-two__single">
                            <div className="cta-two__icon">
                                <span><i className="kipso-icon-knowledge"></i></span>
                            </div>
                            <div className="cta-two__content">
                                <h2 className="cta-two__title">Join Chapter</h2>
                                <p className="cta-two__text">Join an existing Minority Programmers chapter in your school, state, region, or country.</p>
                                <a href="#" className="thm-btn cta-two__btn">Find Chapter</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 thm-base-bg">
                        <div className="cta-two__single">
                            <div className="cta-two__icon">
                                <span><i className="kipso-icon-professor"></i></span>
                            </div>
                            <div className="cta-two__content">
                                <h2 className="cta-two__title">Start Your Own Chapter</h2>
                                <p className="cta-two__text">Can't find a chapter in your area? Make your own and represent MPA as a community leader!</p>
                                <a href="#" className="thm-btn cta-two__btn">Next Steps</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Chapter;
