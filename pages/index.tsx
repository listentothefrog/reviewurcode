import dynamic from "next/dynamic";
const LoginPage = dynamic(() => import("../components/landing-page/LoginPage"));
import Head from "next/head";
import RedStone from "../public/RedStone.png";

const Home = () => {
  return (
    <>
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
        <meta property="og:image" content="https://ibb.co/J3954sn" />

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
        <meta property="twitter:image" content="https://ibb.co/J3954sn" />
      </Head>
      ;
      <LoginPage />
    </>
  );
};

export default Home;
