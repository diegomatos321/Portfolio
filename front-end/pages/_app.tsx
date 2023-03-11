import { StrictMode } from "react";
import type { AppProps } from "next/app";

import GoogleAnalytics from "../components/GoogleAnalytics";
import GlobalSEO from "../seo/global";
import Footer from '../components/templates/Footer';

import "../css/global.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return <StrictMode>
        { process.env.NODE_ENV === 'production' ? <GoogleAnalytics /> : null }
        <GlobalSEO />
        <Component {...pageProps} />
        {/* <Footer /> */}
    </StrictMode>
}