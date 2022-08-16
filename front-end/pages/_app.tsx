import { StrictMode, useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import Header from "../components/templates/Header"
import GoogleAnalytics from "../components/GoogleAnalytics";
import GlobalSEO from "../seo/global";
import * as gtag from '../lib/gtag';

import "../css/index.css"

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = url => {
            gtag.pageview(url);
        }

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.on('routeChangeComplete', handleRouteChange);
        }
    }, [router.events]);

    return <StrictMode>
        <GoogleAnalytics />
        <GlobalSEO />
        <Header />
        <Component {...pageProps} />
    </StrictMode>
}