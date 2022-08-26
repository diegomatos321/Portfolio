import { StrictMode } from "react";
import type { AppProps } from "next/app";

import Header from "../components/templates/Header"
import GoogleAnalytics from "../components/GoogleAnalytics";
import GlobalSEO from "../seo/global";

import "../css/index.css"

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return <StrictMode>
        { process.env.NODE_ENV === 'production' ? <GoogleAnalytics /> : null }
        <GlobalSEO />
        <Header />
        <Component {...pageProps} />
    </StrictMode>
}