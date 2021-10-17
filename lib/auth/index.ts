import { signInWithPopup, GithubAuthProvider } from "@firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";

export const githubOAuth = async () => {
  await signInWithPopup(auth, new GithubAuthProvider())
    .then(async (result) => {
      const user = result;
      console.log(user);
      await setDoc(doc(db, "users", auth.currentUser?.uid! as any), {
        username: auth.currentUser?.displayName,
        photoUrl: auth.currentUser?.photoURL,
        createdAt: auth.currentUser?.metadata.creationTime,
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GithubAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential);
    });
};
