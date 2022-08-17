import Header from "../components/Header";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { MoralisProvider } from "react-moralis";
import Head from "next/head";
import SocialMedia from "../components/SocialMedia";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <SocialMedia />
      <Component {...pageProps} />
      <Footer />
    </MoralisProvider>
  );
}

export default MyApp;
