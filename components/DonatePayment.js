import React from 'react'
import { PayPalButtons } from "@paypal/react-paypal-js";

const DonatePayment = ({ form, count, setCount, setIsDone, isDone, setMonthly, monthly, createOrder, onApprove }) => {
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
            <p className="text-md mt-2 mb-2">Or make a donation with</p>
            <div className="">
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
            </div>
        </>
    )
}

export default DonatePayment;


