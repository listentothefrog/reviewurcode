import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import NProgress from "nprogress";
import { Router } from "next/router";
import "../styles/globals.css";
import "nprogress/nprogress.css";
import { ToastProvider } from "react-toast-notifications";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>
    </>
  );
};

export default MyApp;
