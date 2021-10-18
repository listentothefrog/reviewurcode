import { useRouter } from "next/dist/client/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase/firebase";
const DashboardHeader = React.lazy(
  () => import("../components/dashboard/DashboardHeader")
);
import Head from "next/head";
import Logo from "../public/RedStone.png";
import React, { Suspense } from "react";

const dash = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  if (loading) return <h1 className="text-red-500">Loading...</h1>;
  else if (error) return console.log(error);
  else if (!user) {
    router.push("/");
  }
  return (
    <div>
      <Head>
        <title>ReviewurCode — Dashboard</title>
        <html lang="en" />
        <link rel="shortcut icon" href={Logo.src} type="image/x-icon" />
        <meta
          name="description"
          content="Upload your code for a review or review other's code."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Suspense fallback="Loading...">
        <DashboardHeader />
      </Suspense>
    </div>
  );
};

export default dash;
