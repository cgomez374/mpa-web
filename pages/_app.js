import '../node_modules/react-modal-video/scss/modal-video.scss';
import 'tailwindcss/tailwind.css';
import 'toastify-js/src/toastify.css'
import '../styles/main.scss';
import "../components/MentorshipCSS/MentorshipAppSideBar.css"
import "../components/MentorshipCSS/MentorshipAppSwipeCards.css"
import '../components/MentorshipCSS/MentorshipPersonalDetailsDropDown.css'
import '../components/MentorshipCSS/MentorshipPersonalDetailsSelect.css'
import '../components/MentorshipCSS/MentorshipPersonalDetails.css'
import '../components/MentorshipCSS/MentorshipPersonalDetailsDropDown.css'
import '../components/MentorshipCSS/MentorshipPersonalDetailsDropDown.css'
import "../components/MentorshipCSS/MentorshipRegister.css"
import "../components/join/join.css";
import "../components/MentorshipCSS/mentorship.css"
import "../components/MentorshipCSS/mentorship.css"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import '../components/incubator-css/incubator.css'
import { GlobalProvider } from '../contexts/provider';
import '../styles/Careers/JobCreation.css';
import '../styles/main.scss';
import '../styles/Careers/SavedJobs.css';
import '../styles/Careers/CareersPage.css';
import '../styles/Careers/JobsMain.css';
import '../styles/Careers/CareersPage.css';
import '../styles/Careers/CompaniesMain.css';
import '../styles/Careers/JobsMain.css';
import '../styles/Careers/CreateCompany.css';
import '../styles/Careers/ApplyModal.css';
import '../styles/Careers/normalizer.css';
import '../styles/Careers/CareersMainComponent.css';
import '../styles/Careers/JobsFilters.css';


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
