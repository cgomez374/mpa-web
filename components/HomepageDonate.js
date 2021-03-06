import React, { useState, useContext } from 'react'
import { GlobalContext } from '../contexts/provider'
import DonateAmount from './DonateAmount'
import DonatePayment from './DonatePayment'
import DonateCompleted from './DonateCompleted'
import DonateDetails from './DonateDetails'

const HomepageDonate = () => {
    const { amount, donateDispatch } = useContext(GlobalContext)
    const [isDone, setIsDone] = useState(false)
    const [count, setCount] = useState(1)
    const [value, setValue] = useState(0);
    const [monthly, setMonthly] = useState(false)

    const [succeeded, setSucceeded] = useState(false);
    const [paypalErrorMessage, setPaypalErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);
    const [billingDetails, setBillingDetails] = useState([]);
    const [payment, setPayment] = useState([])

    // get donate amount when click
    const handleValue = (e) => {
        // dispatch
        donateDispatch({
            type: "UPDATE_DONATE_AMOUNT", amount: e.target.value
        })
    }
    //console.log("amount from global context", amount)

    // creates a paypal order
    const createOrder = (data, actions) => {
        return actions.order
            .create({
                purchase_units: [
                    {
                        amount: {
                            value: amount,
                        },
                    },
                ],
                application_context: {
                    shipping_preference: "NO_SHIPPING",
                },
            })
            .then((orderID) => {
                setOrderID(orderID);
                return orderID;
            });
    };

    // handles when a payment is confirmed for paypal
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { purchase_units } = details;
            setBillingDetails(details);
            setPayment(purchase_units)
            setSucceeded(true);
            setIsDone(true);
            count++;

        })
    };
    // handles payment errors
    const onError = () => {
        setPaypalErrorMessage("Something went wrong with your payment");
    }

    return (
        <>
            <section className="homepage__donate">
                <div className="heading__number"><h3>07</h3></div>
                <div className="container donate__container">
                    <h2 className="heading__title mt-5 mb-5">&lsaquo;Donate/&rsaquo;</h2>
                    <p className="donate__container-subtitle">We rely on donations from everyday people just like you to fund our strategic activism. Please make a recurring donation to our organization so we can continue to fight for your digital rights. </p>

                    <div className="container">
                        <div className="row step__header">
                            <div className={`col step__header-item ${count === 1 ? "step-active" : ""} ${isDone ? "step-done" : ""}`}>
                                {isDone && amount !== 0 ? <i className="far fa-check-circle"></i> : null} Amount
                            </div>
                            <div className={`col step__header-item ${count === 2 ? "step-active" : ""} ${isDone && succeeded ? "step-done" : ""}`}>
                                {isDone && succeeded ? <i className="far fa-check-circle"></i> : null} Payments
                            </div>
                            <div className={`col step__header-item ${count === 3 ? "step-done" : ""}`}>
                                {isDone && succeeded ? <i className="far fa-check-circle"></i> : null}Details
                            </div>
                        </div>
                    </div>

                    <div>

                        <form>
                            {count === 1 ? (
                                <DonateAmount handleValue={handleValue} amount={amount} count={count} setCount={setCount} isDone={isDone} setIsDone={setIsDone} />
                            ) : null}
                            {count === 2 ? (
                                <>
                                    {!succeeded ?
                                        (
                                            <DonatePayment amount={amount} count={count} setCount={setCount} isDone={isDone} setIsDone={setIsDone} setMonthly={setMonthly} monthly={monthly} createOrder={createOrder}
                                                onApprove={onApprove} />
                                        ) : (
                                            <>
                                                {/* <section>
                                                    {billingDetails && (
                                                        <div>
                                                            <pre style={{ color: "#fff" }}>{JSON.stringify(billingDetails, undefined, 2)}</pre>
                                                      </div>
                                                    )}
                                                </section> */}
                                                <DonateCompleted billingDetails={billingDetails} count={count} setCount={setCount} amount={amount} isDone={isDone} setIsDone={setIsDone} succeeded={succeeded} />
                                            </>
                                        )}
                                </>
                            ) : null}
                            {count === 3 ? (
                                <>
                                    <DonateDetails amount={amount} billingDetails={billingDetails} count={count} setCount={setCount} setIsDone={setIsDone} />

                                </>
                            ) : null}
                        </form>
                    </div>
                    <div className="donate__options">
                        <div className="donation__option">
                            <h2>Other ways to support us:</h2>
                            <a href="">Cryptocurrency</a>
                            <a href="">Planned Giving</a>
                            <a href="">Donating Stock</a>
                            <a href="">Twitch Prime</a>
                        </div>
                        <div className="donation__option-right">
                            <h2>To donate by check, please send payments to:</h2>
                            Address
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default HomepageDonate