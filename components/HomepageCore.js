import React from 'react'

const HomepageCore = () => {

    return (
        <>
            <section className="homepage__core">
                <div className="heading__number"><h3>03</h3></div>
                <div className="container">
                    <h2 className="heading__title mt-5 mb-5">&lsaquo;Core_principles/&rsaquo;</h2>

                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm- col-xs-12 card__container-core">
                            <div className="card border-0 rounded-0">
                                <div className="img-banner-core">
                                    <img src="/assets/images/core1.png" alt="" className="card-img-top rounded-0" />
                                    <div className="img-banner-core-container">
                                        <img src="/assets/images/core1.svg" alt="" className="card-img-banner-core" />
                                    </div>
                                </div>
                                <div className="card-body card-body-custom">
                                    <p className="text-right"><a href="#" className="card-button">Diversity in stem</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 card__container-core">
                            <div className="card border-0 rounded-0">
                                <div className="img-banner-core">
                                    <img src="/assets/images/core2.png" alt="" className="card-img-top rounded-0" />
                                    <div className="img-banner-core-container">
                                        <img src="/assets/images/core2.svg" alt="" className="card-img-banner-core" />
                                    </div>
                                </div>
                                <div className="card-body card-body-custom">
                                    <p className="text-right"><a href="#" className="card-button">Software engineer</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 card__container-core">
                            <div className="card border-0 rounded-0">
                                <div className="img-banner-core">
                                    <img src="/assets/images/core3.png" alt="" className="card-img-top rounded-0" />
                                    <div className="img-banner-core-container">
                                        <img src="/assets/images/core3.svg" alt="" className="card-img-banner-core" />
                                    </div>
                                </div>
                                <div className="card-body card-body-custom">
                                    <p className="text-right"><a href="#" className="card-button">Entrepreneuship</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomepageCore