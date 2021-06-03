import React, { useState, useContext } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { DonateContext } from '../contexts/DonateContext'

const CARD_OPTIONS = {
    iconStyle: 'solid',
    style: {
        base: {
            iconColor: '#6772e5',
            color: '#6772e5',
            fontWeight: '500',
            fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
            fontSize: '16px',
            fontSmoothing: 'antialiased',
            background: "#efefef",
            ':-webkit-autofill': {
                color: '#fce883',
            },
            '::placeholder': {
                color: '#6772e5',
            },
        },
        invalid: {
            iconColor: '#ef2961',
            color: '#ef2961',
        },
    },
}

const STRIP_FORM = {
    alignSelf: "center",
    borderRadius: "7px",
    background: "#efefef",
    padding: "2rem",
    width: "90%"
}

const CARD_BUTTON = {
    background: "#5469d4",
    color: "#ffffff",
    borderRadius: "0 0 4px 4px",
    border: "0",
    padding: "12px 16px",
    fontSize: "16px",
    cursor: "pointer",
    display: "block",
    transition: "all 0.2s ease",
    boxShadow: "0px 4px 5.5px 0px rgba(0, 0, 0, 0.07)",
    width: "50%",
    margin: "2rem auto 0 auto"
}

const DONATE_HEADER = {
    color: "#fff",
    fontSize: "2rem",
    marginBottom: "2rem"
}

const BACK_BUTTON = {
    background: "#5469d4",
    color: "#ffffff",
    borderRadius: "4px",
    border: "0",
    padding: "12px 16px",
    fontSize: "16px",
    cursor: "pointer",
    display: "block",
    transition: "all 0.2s ease",
    boxShadow: "0px 4px 5.5px 0px rgba(0, 0, 0, 0.07)",
    width: "150px",
    margin: "0 auto",
    textAlign: "center"
}

const CONTAINER = {
    fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
    background: "#efefef",
    borderRadius: "5px",
    color: '#6772e5',
    padding: "2rem",
    margin: "1rem 1rem 2rem 1rem",
}

const INPUT = {
    color: "#6772e5",
    border: "1px solid #6772e5",
    borderRadius: "5px",
    padding: "5px",
    background: "#efefef",
    margin: "1rem 0",
    width: "100%"
}

const HEADING = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textTransform: "capitalize"
}

const HEADING_2 = {
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
}

const DETAIL = {
    display: "flex",
    color: "#7b818a"
}

const TOPIC = {
    fontWeight: "bold"
}

const PRICE = {
    marginLeft: "auto"
}

const TITLE = {
    margin: "20px 0 10px 0",
    fontWeight: "bold",
    color: "#7b818a"

}

const DonateStripeForm = () => {
    const { form } = useContext(DonateContext)
    const stripe = useStripe();
    const elements = useElements();
    const [payment, setPayment] = useState([])
    const [name, setName] = useState("");
    const [checkoutError, setCheckoutError] = useState();
    const [checkoutSuccess, setCheckoutSuccess] = useState();

    const handleChange = (e) => {
        setName(e.target.value)
        //console.log(name)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {

            const res = await fetch('/api/payment_intents', {
                body: JSON.stringify({
                    amount: form.amount * 100,
                    name: name
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            })

            const result = await res.json()
            //console.log("result", result)

            const cardElement = elements.getElement(CardElement)

            // Use your card Element with other Stripe.js APIs
            const { error, paymentIntent: { status } } = await stripe.confirmCardPayment(
                result.client_secret,
                {
                    payment_method: {
                        card: cardElement,
                        billing_details: {
                            name: name,
                        },
                    },
                }
            )

            if (error) throw new Error(error.message);
            if (result) {
                setCheckoutSuccess(true);
                console.log("success", result)
            }
        } catch (err) {
            alert(err.message);
            setCheckoutError(err.message);
        }
    };

    if (checkoutSuccess) {
        return (
            <>
                <p style={DONATE_HEADER}>Donate successful!</p>
                <div style={CONTAINER}>
                    <h2 style={HEADING}>Hi, {name}</h2>
                    <h2 style={HEADING_2}>Thank you for your contribution</h2>
                    <hr />
                    <div className="container step__completed-details">
                        <p style={TITLE}>Details of donation:</p>
                        <div className="step__details-box">
                            <div style={DETAIL}>
                                <div style={TOPIC}><p>Amount:</p></div>
                                <div style={PRICE}><p>${form.amount}</p></div>
                            </div>
                            <div style={DETAIL}>
                                <div style={TOPIC}><p>Payment method:</p></div>
                                <div style={PRICE}><p>Credit card</p></div>
                            </div>
                        </div>
                    </div>

                </div>
                <a href="/index-4" style={BACK_BUTTON}>Back to MPA</a>
            </>
        )
    }
    return (
        <>
            {checkoutSuccess ? null : <h1 style={DONATE_HEADER}>Donation Amount: ${form.amount}</h1>}

            <form onSubmit={handleSubmit} style={STRIP_FORM}>
                <input
                    placeholder="Cardholder name"
                    style={INPUT}
                    type="Text"
                    name="cardholderName"
                    onChange={handleChange}
                    required
                />
                <CardElement options={CARD_OPTIONS} />
                <button type="submit" disabled={!stripe} style={CARD_BUTTON} className="btn btn-filled">
                    Donate
                </button>

                {checkoutError && <p style={{ color: "red", textAlign: "center", marginTop: "2rem" }}>{checkoutError}</p>}
            </form>

        </>
    );
}

export default DonateStripeForm