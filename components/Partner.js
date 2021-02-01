import React from 'react';

const Partner = () => {
    return (
        <div id="partner" className="cta-two">
            <div className="container-fluid">
                <div className="row no-gutters">
                <div className="col-lg-6 thm-base-bg-2">
                        <div className="cta-two__single">
                            <div className="cta-two__icon">
                                <span><i className="kipso-icon-strategy"></i></span>
                            </div>
                            <div className="cta-two__content">
                                <h2 className="cta-two__title">Become A Partner</h2>
                                <p className="cta-two__text">Work on iniative with MPA today.</p>
                                <a href="#" className="thm-btn cta-two__btn">Partner</a>
                            </div>
                        </div>
                    </div>
                <div className="col-lg-6 thm-base-bg">
                        <div className="cta-two__single">
                            <div className="cta-two__icon">
                                <span><i className="kipso-icon-health"></i></span>
                            </div>
                            <div className="cta-two__content">
                                <h2 className="cta-two__title">Become A Sponsor</h2>
                                <p className="cta-two__text">Fund a MPA program today and be put on our sponsor list</p>
                                <a href="#" className="thm-btn cta-two__btn">Sponsor</a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Partner;
