import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/layout.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useEffect } from "react";


export default function App({ Component, pageProps }) {
  useEffect(()=>{
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
  },[])
  return (
    <>
      <Head>
        <title>Suzanne Montgomery Art</title>
        <meta name="description" content="Suzanne Montgomery official website"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
