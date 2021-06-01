import Stripe from "stripe";
import { parseCookies, setCookie } from "nookies";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import DonateStripeForm from "../components/DonateStripeForm";

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

const DONATE_FORM = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#141471",
    width: "100%",
    height: "100vh",
    fontFamily: 'Red Hat Display, sans-serif'
}

export const getServerSideProps = async (ctx) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET)

    let paymentIntent

    const { paymentIntentId } = await parseCookies(ctx)

    if (paymentIntentId) {
        paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

        return {
            props: {
                paymentIntent
            }
        };
    }
    paymentIntent = await stripe.paymentIntents.create({
        amount: 1000,
        currency: "usd"
    })

    setCookie(ctx, "paymentIntentId", paymentIntent.id)
    console.log(paymentIntent)
    return {
        props: {
            paymentIntent
        },

    }

}

const DonateStripe = ({ paymentIntent }) => {
    return (
        <div style={DONATE_FORM} className="donate-form">
            <Elements stripe={stripePromise}>
                <DonateStripeForm paymentIntent={paymentIntent} />
            </Elements>
        </div>
    );
};
export default DonateStripe;