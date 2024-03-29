import { signInWithPopup, GithubAuthProvider } from "@firebase/auth";
import { doc, setDoc } from "firebase/firestore/lite";
import { auth, db } from "../firebase/firebase";

export const githubOAuth = async () => {
  await signInWithPopup(auth, new GithubAuthProvider())
    .then(async () => {
      await setDoc(doc(db, "users", auth.currentUser?.uid! as any), {
        username: auth.currentUser?.displayName,
        photoUrl: auth.currentUser?.photoURL,
        createdAt: auth.currentUser?.metadata.creationTime,
      });
    })
    .catch((error: Error) => {
      console.error(error.message);
    });
};
