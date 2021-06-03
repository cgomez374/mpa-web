import '../node_modules/react-modal-video/scss/modal-video.scss';
import 'tailwindcss/tailwind.css';
import 'toastify-js/src/toastify.css'
import '../styles/main.scss';
import { GlobalProvider } from '../contexts/provider';
import DonateContext from '../contexts/DonateContext'
import { PayPalScriptProvider } from "@paypal/react-paypal-js"

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <PayPalScriptProvider options={{ "client-id": process.env.PAYPAL_CLIENT_ID }}>
            <GlobalProvider>
                <DonateContext>
                    <Component {...pageProps} />
                </DonateContext>
            </GlobalProvider>
        </PayPalScriptProvider>
    )
}
