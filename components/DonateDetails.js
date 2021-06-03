import React from 'react'
import Router from 'next/router'

const DonateDetails = ({ billingDetails, amount, count, setCount, setIsDone }) => {

    return (
        <>
            <div className="step__details mt-2">
                <div className="container">
                    <h1>Donation complete!</h1>
                    <p>Your donation of ${(Number(amount)).toFixed(2)} has been processed. An e-mail has been sent to {billingDetails.payer.email_address}. Please save this for your records.</p>
                    <i className="fas fa-check-circle icon"></i>
                </div>

                <div className="step__button mt-3">
                    <button
                        className="button btn-gradient"
                        type="submit"
                        onClick={() => {
                            setCount(1)
                            setIsDone(false)
                            Router.reload(window.location.pathname)
                        }}
                        disabled={count < 2}
                    >
                        Donate again
                    </button>
                </div>
            </div>
        </>
    )
}

export default DonateDetails;

