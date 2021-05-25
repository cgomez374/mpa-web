import React, { useState } from 'react'
import Link from "next/link"
import DonateAmount from './DonateAmount'

const HomepageDonate = ({ router }) => {
    const [isDone, setIsDone] = useState(true)

    return (
        <>
            <section className="homepage__donate">
                <div className="heading__number"><h3>07</h3></div>
                <div className="container donate__container">
                    <h2 className="heading__title mt-5 mb-5">&lsaquo;Donate/&rsaquo;</h2>
                    <p className="donate__container-subtitle">We rely on donations from everyday people just like you to fund our strategic activism. Please make a recurring donation to our organization so we can continue to fight for your digital rights. </p>


                    <div className="container">
                        <div className="row step__header">
                            <div className="col step__header-item step-active">
                                <a>Amount</a>
                            </div>
                            {/* {isDone ? <i className="far fa-check-circle"></i> : null}  */}
                            <div className="col step__header-item">
                                <a>Payments</a>
                            </div>
                            <div className="col step__header-item">Details</div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default HomepageDonate