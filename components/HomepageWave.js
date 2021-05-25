import React from 'react'

const HomepageWave = () => {

    return (
        <>
            <section className="homepage__wave">
                <div className="heading__number"><h3>04</h3></div>
                <div className="container">
                    <h2 className="heading__title mt-5 mb-5">&lsaquo;The_minority_wave/&rsaquo;</h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 card__container-core">
                            <div className="card border-0 rounded-0">
                                <div className="wave__img-left">
                                    <img src="/assets/images/wave1.svg" alt="" className="card-img-top" />
                                </div>
                                <div className="card-body wave__card-text">
                                    <h1 className="wave__text-title"><a href="#" className="card-button">MINORITY THINK TANK</a></h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 card__container-core">
                            <div className="card border-0 rounded-0">
                                <div className="wave__img-right">
                                    <img src="/assets/images/wave2.jpg" alt="" className="card-img-top rounded-0" />
                                </div>
                                <div className="card-body wave__card-text">
                                    <h1 className="wave__text-title"><a href="#" className="card-button">MINORITY VENTURE CAPITAL </a></h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="wave__text">
                        <p>From ideation, to build, to investment, we provide turnkey vertical integration for minorities to deliver product to markets.</p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomepageWave