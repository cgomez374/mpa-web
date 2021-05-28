import React, { useState } from 'react'
import DonateAmount from './DonateAmount'
import DonatePayment from './DonatePayment'
import DonateCompleted from './DonateCompleted'
import DonateDetails from './DonateDetails'

const HomepageDonate = () => {
    const [isDone, setIsDone] = useState(false)
    const [count, setCount] = useState(1)
    const [value, setValue] = useState(0);
    const [monthly, setMonthly] = useState(false)

    const [succeeded, setSucceeded] = useState(false);
    const [paypalErrorMessage, setPaypalErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);
    const [billingDetails, setBillingDetails] = useState([]);
    const [payment, setPayment] = useState([])


    const [form, setForm] = useState({
        amount: "",
    })
    const updateForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
    const handleValue = (e) => {
        setForm({
            ...form,
            amount: e.target.value,
        })
        //console.log(form.amount)
        //setValue(e.target.value)
    }

    // creates a paypal order
    const createOrder = (data, actions) => {
        return actions.order
            .create({
                purchase_units: [
                    {
                        amount: {
                            // charge users $499 per order
                            value: form.amount,
                        },
                    },
                ],
                // remove the applicaiton_context object if you need your users to add a shipping address
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
    // convert obj to array
    // const result = Object.values(payment);
    // console.log("array", result)
    //console.log(`Payment success ${form.amount}`)
    // handles payment errors
    const onError = (data, actions) => {
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
                                {isDone && form.amount !== 0 ? <i className="far fa-check-circle"></i> : null} Amount
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
                        {/* <p>Step {count} of 3</p> */}
                        <form>
                            {count === 1 ? (
                                <DonateAmount handleValue={handleValue} form={form} count={count} setCount={setCount} isDone={isDone} setIsDone={setIsDone} />
                            ) : null}
                            {count === 2 ? (
                                <>
                                    {!succeeded ?
                                        (
                                            <DonatePayment form={form} count={count} setCount={setCount} isDone={isDone} setIsDone={setIsDone} setMonthly={setMonthly} monthly={monthly} createOrder={createOrder}
                                                onApprove={onApprove} />
                                        ) : (
                                            <>
                                                {/* <section>
                                                    {billingDetails && (
                                                        <div>
                                                            <pre style={{ color: "#fff" }}>{JSON.stringify(billingDetails, undefined, 2)}</pre>
                                                            <pre style={{ color: "#fff" }}>{JSON.stringify(payment, undefined, 2)}</pre>

                                                        </div>
                                                    )}
                                                </section> */}
                                                <DonateCompleted billingDetails={billingDetails} count={count} setCount={setCount} form={form} isDone={isDone} setIsDone={setIsDone} succeeded={succeeded} />
                                            </>
                                        )}
                                </>
                            ) : null}
                            {count === 3 ? (
                                <>
                                    <DonateDetails form={form} billingDetails={billingDetails} count={count} setCount={setCount} setIsDone={setIsDone} />

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