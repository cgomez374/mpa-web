import '../node_modules/react-modal-video/scss/modal-video.scss';
import 'tailwindcss/tailwind.css';
import 'toastify-js/src/toastify.css'
import '../styles/main.scss';
import "../styles/MentorshipCSS/MentorshipAppSideBar.css"
import "../styles/MentorshipCSS/MentorshipAppSwipeCards.css"
import '../styles/MentorshipCSS/MentorshipPersonalDetailsDropDown.css'
import '../styles/MentorshipCSS/MentorshipPersonalDetails.css'
import '../styles/MentorshipCSS/MentorshipPersonalDetailsDropDown.css'
import '../styles/MentorshipCSS/MentorshipPersonalDetailsDropDown.css'
import "../styles/MentorshipCSS/MentorshipRegister.css"
import "../components/join/join.css";
import "../styles/MentorshipCSS/mentorship.css"
import "../styles/MentorshipCSS/mentorship.css"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import '../styles/incubator-css/incubator.css'
import { GlobalProvider } from '../contexts/provider';
import '../styles/main.scss';
import '../styles/Careers/index.css';

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
