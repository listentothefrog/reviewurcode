import dynamic from "next/dynamic";
const ViewContactForm = dynamic(
  () => import("../components/contact/ViewContactForm")
);
import Head from "next/head";
import RedStone from "../public/RedStone.png";

const contact = () => {
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
      </Head>
      <ViewContactForm />
    </>
  );
};

export default contact;
