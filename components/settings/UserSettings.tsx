import { signOut } from "@firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../lib/firebase/firebase";
import Container from "../Container";

const UserSettings = () => {
  const [user] = useAuthState(auth);
  const rawJoinedDate: string = user?.metadata.creationTime;
  const refinedJoinedDate = rawJoinedDate?.substring(4, 16);
  return (
    <Container variant="regular">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center justify-">
          <img
            className="w-20 rounded-lg"
            src={auth.currentUser?.photoURL! as string}
            alt="user profile picture"
          />
          <div className="flex flex-col">
            <h1 className="ml-2 text-2xl">{auth.currentUser?.displayName}</h1>
            <p className="ml-2 mt-2 text-gray-400">
              Joined: {refinedJoinedDate}
            </p>
          </div>
        </div>
        <div>
          <button
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
            onClick={() => signOut(auth)}
          >
            Sign out
          </button>
        </div>
      </div>
    </Container>
  );
};

export default UserSettings;

UserSettings.getInitialProps = () => {
  try {
    const { uid }: any = auth.currentUser?.uid;
    return { uid };
  } catch {}
};
