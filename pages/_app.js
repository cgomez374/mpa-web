import '../node_modules/react-modal-video/scss/modal-video.scss';
import 'tailwindcss/tailwind.css';
import 'toastify-js/src/toastify.css'
import '../styles/main.scss';
import '../components/incubator-css/incubator.css'
import { GlobalProvider } from '../contexts/provider';


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <GlobalProvider>
            <Component {...pageProps} />
        </GlobalProvider>
    )
}
