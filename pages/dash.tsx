import { useRouter } from "next/dist/client/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase/firebase";
import dynamic from "next/dynamic";
const DashboardHeader = dynamic(
  () => import("../components/Dashboard/DashboardHeader")
);
const ViewFeed = dynamic(() => import("../components/Dashboard/ViewFeed"));
import Head from "next/head";
import Logo from "../public/RedStone.png";
import Spinner from "../components/Spinner";

const dash = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  if (loading) return <Spinner />;
  else if (error) return console.log(error);
  else if (!user) {
    router.push("/");
  }
  return (
    <div>
      <Head>
        <title>ReviewurCode — Dashboard</title>
        <html lang="en" />
        <link rel="shortcut icon" href={Logo.src} type="png" />
        <meta
          name="description"
          content="Upload your code for a review or review other's code."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DashboardHeader />
      <ViewFeed />
    </div>
  );
};

export default dash;
