import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import NProgress from "nprogress";
import { Router } from "next/dist/client/router";
import "../styles/globals.css";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
