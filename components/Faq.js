import React from 'react';

const Faq = () => {
    return (
        <section className="faq-one">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-lg-6">
                        <div className="faq-one__single">
                            <div className="faq-one__icon">
                                <span>?</span>
                            </div>
                            <div className="faq-one__content">
                                <h2 className="faq-one__title">Can I join MPA even if I am not a minority?</h2>
                                <p className="faq-one__text">Yes, we welcome anyone.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-one__single">
                            <div className="faq-one__icon">
                                <span>?</span>
                            </div>
                            <div className="faq-one__content">
                                <h2 className="faq-one__title">What is the easiest way to get involved</h2>
                                <p className="faq-one__text">By signing up for our education programs, events, or just putting your informatino in our programmer database.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-one__single">
                            <div className="faq-one__icon">
                                <span>?</span>
                            </div>
                            <div className="faq-one__content">
                                <h2 className="faq-one__title">How should I start learning code</h2>
                                <p className="faq-one__text">By signing up for our MinorityCodeCamp or taking one of our modules at MinorityProgrammersUniversity.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-one__single">
                            <div className="faq-one__icon">
                                <span>?</span>
                            </div>
                            <div className="faq-one__content">
                                <h2 className="faq-one__title">How long have you been around</h2>
                                <p className="faq-one__text">We were started by college students in Virginia in late 2019.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6" style={{paddingBottom: `0px`, borderBottom: `0px none`}}>
                        <div className="faq-one__single">
                            <div className="faq-one__icon">
                                <span>?</span>
                            </div>
                            <div className="faq-one__content">
                                <h2 className="faq-one__title">How can I help?</h2>
                                <p className="faq-one__text">Join an existing chapter, or start your own. Throw your own events. Make content, teach a class. Reach out to corporate sponsors and startup. Build your MP Community today.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6" style={{paddingBottom: `0px`, borderBottom: `0px none`}}>
                        <div className="faq-one__single">
                            <div className="faq-one__icon">
                                <span>?</span>
                            </div>
                            <div className="faq-one__content">
                                <h2 className="faq-one__title">What if I don't program</h2>
                                <p className="faq-one__text">We need all people for ideas. We need lawyers, graphic designers, educators, etc. We also have sister Minority Organizations where we can fit you even if you don't code.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
