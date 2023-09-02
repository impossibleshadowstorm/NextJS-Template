import React from "react";
import Head from "next/head";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Script from "next/script";

function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Spinner - Corporate</title>
                <link rel="icon" href="assets/images/icons/header1-logoicon.png" />
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default Layout;