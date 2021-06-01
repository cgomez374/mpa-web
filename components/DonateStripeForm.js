import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { destroyCookie } from "nookies";

const DonateStripeForm = ({ paymentIntent }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [checkoutError, setCheckoutError] = useState();
    const [checkoutSuccess, setCheckoutSuccess] = useState();

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
        fontSize: "1.5rem",
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

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const {
                error,
                paymentIntent: { status }
            } = await stripe.confirmCardPayment(paymentIntent.client_secret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            });

            if (error) throw new Error(error.message);

            if (status === "succeeded") {
                setCheckoutSuccess(true);
                console.log("success", paymentIntent)
                destroyCookie(null, "paymentIntentId");

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
                <a href="/index-4" style={BACK_BUTTON}>Back to MPA</a>
            </>
        )
    }
    return (
        <>
            {checkoutSuccess ? null : <h1 style={DONATE_HEADER}>Donation Amount: ${paymentIntent.amount}</h1>}
            <form onSubmit={handleSubmit} style={STRIP_FORM}>
                <CardElement options={CARD_OPTIONS} className="stripe-form" />
                <button type="submit" disabled={!stripe} style={CARD_BUTTON} className="btn btn-filled">
                    Donate
                </button>

                {checkoutError && <p style={{ color: "red", textAlign: "center", marginTop: "2rem" }}>{checkoutError}</p>}
            </form>


        </>
    );
}

export default DonateStripeForm