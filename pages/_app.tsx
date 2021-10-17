import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import NProgress from "nprogress";
import { Router } from "next/dist/client/router";
import "../styles/globals.css";
import "nprogress/nprogress.css";
import Head from "next/head";
import RedStone from "../public/RedStone.png";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
  <Head>
    <title>ReviewurCode — Online platform for code review</title>
    <link rel="shortcut icon" href={RedStone.src} type="image/x-icon" />
    <html lang="en" />
    <meta
      name="title"
      content="ReviewurCode — Online platform for code review"
    />
    <meta
      name="description"
      content="ReviewurCode is a online platfrom where programmers can review code and submit feedback to make your code more futuristic."
    />

    {/* Open Graph / Facebook  */}
    <meta property="og:type" content="website" />
    {/* <meta property="og:url" content="" /> */}
    <meta
      property="og:title"
      content="ReviewurCode — Online platform for code review"
    />
    <meta
      property="og:description"
      content="ReviewurCode is a online platfrom where programmers can review code and submit feedback to make your code more futuristic."
    />
    <meta
      property="og:image"
      content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
    />

    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" />
    {/* <meta property="twitter:url" content="https://metatags.io/" /> */}
    <meta
      property="twitter:title"
      content="ReviewurCode — Online platform for code review"
    />
    <meta
      property="twitter:description"
      content="ReviewurCode is a online platfrom where programmers can review code and submit feedback to make your code more futuristic."
    />
    <meta
      property="twitter:image"
      content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
    />
  </Head>;
  return <Component {...pageProps} />;
};

export default MyApp;
