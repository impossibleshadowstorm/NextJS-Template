import { useEffect } from "react";
import Head from "next/head";

import "../public/assets/css/all.css";
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/boxicons.min.css";
import "../public/assets/css/bootstrap-icons.css";
import "../public/assets/css/swiper-bundle.css";
import "../public/assets/css/animate.css";
import "../public/assets/style.css";
import Script from "next/script";

//Default Warniing Error Hide
console.log = console.warn = console.error = () => {};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
     
      <Component {...pageProps} />
      <Script id="wow" src="/js/wow.min.js"></Script>
      <Script id="initWow" strategy="lazyOnload">{`new WOW().init();`}</Script>
    </>
  );
}

export default MyApp;