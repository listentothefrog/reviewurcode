import { useRouter } from "next/dist/client/router";
import { useAuthState } from "react-firebase-hooks/auth";
import UserSettings from "../../../components/settings/UserSettings";
import { auth } from "../../../lib/firebase/firebase";
import Head from "next/head";
import Logo from "../../../public/RedStone.png";

const index = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  if (loading) return <h1 className="text-red-500">Loading...</h1>;
  else if (error) return console.log(error);
  else if (!user) {
    router.push("/");
  }
  return (
    <>
      <Head>
        <title>Settings for {auth.currentUser?.displayName}</title>
        <link rel="shortcut icon" href={Logo.src} type="image/x-icon" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <UserSettings username={auth.currentUser?.displayName} />
    </>
  );
};

export default index;
