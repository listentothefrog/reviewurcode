import { useRouter } from "next/dist/client/router";
import { useAuthState } from "react-firebase-hooks/auth";
import UserSettings from "../../../components/settings/UserSettings";
import { auth } from "../../../lib/firebase/firebase";

const index = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  if (loading) return <h1 className="text-red-500">Loading...</h1>;
  else if (error) return console.log(error);
  else if (!user) {
    router.push("/");
  }
  return <UserSettings username={auth.currentUser?.displayName} />;
};

export default index;
