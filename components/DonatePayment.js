import React from 'react'
import Link from 'next/link'
import { PayPalButtons } from "@paypal/react-paypal-js";

const DonatePayment = ({ form, count, setCount, setIsDone, isDone, setMonthly, monthly, createOrder, onApprove, props, succeeded }) => {
    return (
        <>
            <div className="step__payment">
                <h2 className="step__payment-amount">${form.amount}{monthly === true ? "/month" : ""}</h2>
                <h2 className="step__payment-change"
                    onClick={() => {
                        setCount(count - 1)
                        setIsDone(false)
                    }}
                    disabled={count < 2}>
                    <p><i className="far fa-edit"></i> Change amount</p>
                </h2>
            </div>

            <p className="text-md mt-2 mb-2">Make it monthly!</p>
            <div className="container">
                <div className="row step__payment-monthly">
                    <div className="col-lg-6">
                        <button type="button" className="step__payment-option" onClick={() => setMonthly(true)}>
                            <p>Yes, count me in!</p>
                        </button>
                    </div>
                    <div className="col-lg-6">
                        <button type="button" className="step__payment-option" onClick={() => setMonthly(false)} >
                            <p>No, only donate once.</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className="payment__buttons mt-3">
                <div className="col mt-4">
                    <p className="mt-2 mb-2">Pay with credit card</p>
                    <Link href="/donate-stripe">
                        <a>Pay by credit card</a>
                    </Link>
                </div>
                <div className="col mt-4">
                    <p className="mt-2 mb-2">Or make a donation with</p>
                    <PayPalButtons
                        style={{
                            color: "white",
                            shape: "rect",
                            label: "pay",
                            tagline: false,
                            layout: "horizontal",
                        }}
                        createOrder={createOrder}
                        onApprove={onApprove}
                        fundingSource={paypal.FUNDING.PAYPAL}
                    />
                </div>
            </div>
            <div className="donate__legal">
                <h2>Legal information:</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In morbi ut adipiscing pulvinar risus, sit ut velit duis. Metus nibh nulla diam egestas mauris egestas rhoncus cras.</p>
            </div>

            {succeeded ?
                <div className="step__button mt-3">
                    <button
                        className="button btn-gradient"
                        type="submit"
                        onClick={() => {
                            setCount(count + 1)
                            setIsDone(!isDone)
                        }}
                        disabled={count > 2}

                    >
                        Continue
                    </button>
                </div> : ""}
        </>
    )
}

export default DonatePayment;


