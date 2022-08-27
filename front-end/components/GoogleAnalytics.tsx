import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import * as gtag from '../lib/gtag';

export default function GoogleAnalytics(): JSX.Element {
    const router = useRouter();

    useEffect(() => {
        console.log('SetUp Google Analytics');
        const handleRouteChange = url => {
            gtag.pageview(url);
        }

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.on('routeChangeComplete', handleRouteChange);
        }
    }, [router.events]);
    
    return <>
        <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />

        <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${gtag.GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                    });
                `
            }}
        />
    </>

    /* 
    
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-55RNK7Z86G"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-55RNK7Z86G');
</script>
    */
}