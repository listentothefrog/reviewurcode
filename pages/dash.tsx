import { useRouter } from "next/dist/client/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase/firebase";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import Head from "next/head";
import Logo from "../public/RedStone.png";

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
        <title>Dashboard</title>
        <link rel="shortcut icon" href={Logo.src} type="image/x-icon" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DashboardHeader />
    </div>
  );
};

export default dash;
