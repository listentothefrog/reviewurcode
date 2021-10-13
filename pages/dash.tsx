import { useRouter } from "next/dist/client/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase/firebase";
import { signOut } from "@firebase/auth";

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
      hello world
      <button
        className="ml-5 px-4 py-3 mt-5  bg-red-500 text-white rounded-2xl"
        onClick={() => signOut(auth)}
      >
        Sign Out
      </button>
    </div>
  );
};

export default dash;
