import '../node_modules/react-modal-video/scss/modal-video.scss';
import withRedux from 'next-redux-wrapper';
import { Provider as ReduxProvider } from "react-redux";
import initStore from '../store';
import { Provider } from 'next-auth/client';
import 'tailwindcss/tailwind.css';
import '../styles/main.scss';



// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
      <ReduxProvider store={initStore()} >
        <Provider session={pageProps.session}>
          <Component {...pageProps} />
        </Provider>
      </ReduxProvider>
      )
}
