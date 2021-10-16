import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import NProgress from "nprogress";
import { Router } from "next/dist/client/router";
import "../styles/globals.css";
import "nprogress/nprogress.css";
import Head from "next/head";
import Logo from "../public/RedStone.png";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
  <Head>
    <title></title>
    <link rel="shortcut icon" href={Logo.src} type="image/x-icon" />
    <meta name="description" content="Online platform for code review 🌎👨‍💻" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>;
  return <Component {...pageProps} />;
};

export default MyApp;
