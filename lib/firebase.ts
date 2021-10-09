import firebaseConfig from "./firebaseConfig";

import { initializeApp, getApps } from "firebase/app";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";

if (!getApps.length) {
  initializeApp(firebaseConfig);
}

export const githubOAuth = async () => {
  const auth = getAuth();
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
