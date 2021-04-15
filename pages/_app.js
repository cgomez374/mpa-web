import '../node_modules/react-modal-video/scss/modal-video.scss';
import { Provider } from 'next-auth/client';
import 'tailwindcss/tailwind.css';
import '../styles/main.scss';
import {ProvideAuth} from '../contexts/auth';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <ProvideAuth>
          <Provider session={pageProps.session}>
            <Component {...pageProps} />
          </Provider>
        </ProvideAuth>
      )
}
