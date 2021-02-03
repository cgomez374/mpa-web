import React from 'react';

const Entrepreneur = () => {
    return (
        <section id="onboarding" className="pricing-one pricing-page ">
            <div className="container">
                <div className="block-title text-center">
                    <h2 className="block-title__title">From idea to unicorn, we teach minorities to be world leaders in tech</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="pricing-one__single">
                            <div className="pricing-one__inner">                           
                              {/* <h2 className="pricing-one__price">ThinkTank </h2>
                              
                                <p className="pricing-one__name">Policy & Tech R&D</p> */}
                                <img src="/assets/images/mtt.png" width="90%"></img>

                                <p>12 week intensive researh fellowship with world class scholars, intellectuals, policy makers, researchers, and innovators</p>

                                <a href="https://www.minoritythinktank.org" className="thm-btn pricing-one__btn">Apply</a>
                            
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="pricing-one__single">
                            <div className="pricing-one__inner">
                            <img src="/assets/images/mincubator.png" width="90%"></img>

                                {/* <h2 className="pricing-one__price">Incubator </h2>
                                <p className="pricing-one__name">Ideation to Business</p> */}
                                <p>12 week intensive program for budding entreprenuers from ideation, to development of MVP. With world class business mentors, branding, development, marketing, and sales teams.</p>
                                <a href="https://www.minorityincubator.org" className="thm-btn pricing-one__btn">Apply</a>                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="pricing-one__single">
                            <div className="pricing-one__inner">
                                {/* <h2 className="pricing-one__price">Accelerator </h2>
                                <p className="pricing-one__name">Scale Your Business</p> */}
                                <img src="/assets/images/ma.png" width="90%"></img>

                                <p>Scale your startup, learn to run a world class business, onboard skilled employees, and find investors who care.</p>
                                <a href="https://www.minorityaccelerator.com" className="thm-btn pricing-one__btn">Apply</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="pricing-one__single">
                            <div className="pricing-one__inner">
                            <img src="/assets/images/mangelblack.png" width="90%"></img>

                                {/* <h2 className="pricing-one__price">Investment </h2>
                                <p className="pricing-one__name">Invest in Diverse Tech</p> */}
                                <p>Learn to invest your funds wisely in diverse tech businesses with high returns in both investment and community development.</p>
                                <a href="https://www.minorityventure.com" className="thm-btn pricing-one__btn">Apply</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Entrepreneur;
