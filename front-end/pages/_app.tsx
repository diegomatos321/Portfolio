import type { AppProps } from "next/app";
import Header from "../components/templates/Header"
import Footer from "../components/templates/Footer"
import GlobalSEO from "../seo/global";

import "../css/index.css"

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return <>
        <GlobalSEO />
        <Header />
        <Component {...pageProps} />
        <Footer />
    </>
}