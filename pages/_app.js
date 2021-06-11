import '../node_modules/react-modal-video/scss/modal-video.scss';
import 'tailwindcss/tailwind.css';
import 'toastify-js/src/toastify.css'
import '../styles/main.scss';
import "../components/MentorshipCSS/MentorshipAppSideBar.css"
import "../components/MentorshipCSS/MentorshipAppSwipeCards.css"
import "../components/join/join.css";
import "../components/MentorshipCSS/mentorship.css"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import '../components/incubator-css/incubator.css'
import { GlobalProvider } from '../contexts/provider';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <PayPalScriptProvider options={{ "client-id": process.env.PAYPAL_CLIENT_ID }}>
            <GlobalProvider>
                <Component {...pageProps} />
            </GlobalProvider>
        </PayPalScriptProvider >
    )
}
