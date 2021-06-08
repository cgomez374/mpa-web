import React from 'react'

const HomepageHeader = () => {
    return (
        <>
            <section className="homepage__hero">
                <div className="container">
                    <div className="hero__item">
                        <h1 className="hero__title">Minority programmers association</h1>
                        <h3 className="hero__subtitle">Code, Culture, and Community.</h3>
                        <div className="hero__button">
                            <a href="/register" className="btn__homepage btn-hero ">Join</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomepageHeader