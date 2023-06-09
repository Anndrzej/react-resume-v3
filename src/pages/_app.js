import Footer from "@/components/footer/footer";
import Header from "@/components/header/Header";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${montserrat.variable} font-mont `}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
