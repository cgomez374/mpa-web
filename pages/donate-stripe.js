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

const DonateStripe = () => {
    return (
        <div style={DONATE_FORM} className="donate-form">
            <Elements stripe={stripePromise}>
                <DonateStripeForm />
            </Elements>
        </div>
    );
};
export default DonateStripe;