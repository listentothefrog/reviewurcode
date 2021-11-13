import React from "react";
const CreateCodeReviewPost = React.lazy(
  () => import("../components/Dashboard/CreateCodeReviewPost")
);
import RedStone from "../public/RedStone.png";
import Head from "next/head";
import { Suspense } from "react";
import Spinner from "../components/Spinner";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase/firebase";
import { useRouter } from "next/router";

const create = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  if (loading) return <Spinner />;
  else if (error) return console.log(error);
  else if (!user) {
    router.push("/");
  }
  return (
    <div aria-label="div" lang="en">
      <Head>
        <title>ReviewurCode - Create</title>
        <html lang="en" />
        <link rel="shortcut icon" href={RedStone.src} type="image/x-icon" />
        <meta name="description" content="Create your posts" />
      </Head>
      <Suspense fallback={<Spinner />}>
        <CreateCodeReviewPost />
      </Suspense>
    </div>
  );
};

export default create;
