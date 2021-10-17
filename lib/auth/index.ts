import { signInWithPopup, GithubAuthProvider } from "@firebase/auth";
import { auth } from "../firebase/firebase";

export const githubOAuth = async () => {
  await signInWithPopup(auth, new GithubAuthProvider())
    .then((result) => {
      const user = result;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GithubAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential);
    });
};
