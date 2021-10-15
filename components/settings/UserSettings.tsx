import { auth } from "../../lib/firebase/firebase";
import { signOut } from "@firebase/auth";

interface UserPageProps {
  username: string | null | undefined;
}

const UserSettings = (props: UserPageProps) => {
  const { username } = props;
  return (
    <div>
      {username}
      <button
        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
        onClick={() => signOut(auth)}
      >
        Sign out
      </button>
    </div>
  );
};

export default UserSettings;

UserSettings.getInitialProps = async ({ query }: any) => {
  try {
    const username = typeof query.username === "string" ? query.username : "";
    const { uid }: any = auth.currentUser?.uid;
    return { uid, username };
  } catch {}
};
