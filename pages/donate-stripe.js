import Stripe from "stripe";
import { parseCookies, setCookie } from "nookies";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import DonateStripeForm from "../components/DonateStripeForm";

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

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
        currency: "gbp"
    })

    setCookie(ctx, "paymentIntentId", paymentIntent.id)

    return {
        props: {
            paymentIntent
        }
    }

}

const DonateStripe = ({ paymentIntent }) => {
    return (
        <Elements stripe={stripePromise}>
            <DonateStripeForm paymentIntent={paymentIntent} />
        </Elements>
    );
};
export default DonateStripe;