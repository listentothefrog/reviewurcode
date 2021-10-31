import { addDoc, collection } from "@firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, storage } from "../../lib/firebase/firebase";
import Container from "../Container";

const CreateCodeReviewPost = () => {
  const [user] = useAuthState(auth);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const router = useRouter();
  const formHandler = async (e: any) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadCodeSnippet(file);
    router.push("/dash");
  };
  const uploadCodeSnippet = async (file: any) => {
    const storageRef = ref(storage, `snippets/${file.name}`);
    await uploadBytes(storageRef, file).then(() => {
      getDownloadURL(ref(storage, `snippets/${file.name}`))
        .then((url: any) => {
          const postsRef = collection(db, "posts");
          addDoc(postsRef, {
            title: title,
            body: body,
            codeReviewImage: url,
            createdBy: user?.reloadUserInfo.screenName,
            photoUrl: auth.currentUser?.photoURL,
            upVotes: 0,
          });
        })
        .catch((error: Error) => {
          console.log(error.message);
        });
    });
  };
  return (
    <Container variant="regular">
      <form onSubmit={formHandler} className="flex flex-col w-full h-full">
        <h1 className="text-2xl sm:text-4xl font-bold">Create a public post</h1>
        <div className="w-full border border-gray-500 mt-2"></div>
        <div className="w-full mt-5">
          <p className="font-bold">Upload your code</p>
          <p className="text-gray-500">
            A upload a picture of the code you want the person to review
          </p>
          <p className="text-gray-500 mt-2 italic">
            We recommend using a tool{" "}
            <a
              target="_blank"
              href="https://carbon.now.sh/"
              rel="noreferrer"
              className="text-blue-800 hover:underline hover:text-blue-700"
            >
              carbon.now.sh
            </a>{" "}
            to create your code snippet
          </p>
          <div className="w-full sm:px-8 md:px-16 sm:py-8">
            <main className="container mx-auto max-w-screen-lg h-full">
              <article
                aria-label="File Upload Modal"
                className="relative h-full flex flex-col bg-white shadow-xl rounded-md"
              >
                <section className="h-full overflow-auto p-8 w-full flex flex-col">
                  <header className="border-dashed border-2 border-gray-500 py-12 flex flex-col justify-center items-center">
                    <input required type="file" id="file" />
                  </header>
                </section>
              </article>
            </main>
          </div>
        </div>
        <div className="w-full">
          <div className="mt-5">
            <p className="font-bold mt-2">Title</p>
            <p className="text-gray-500">
              Be specific and imagine asking a code review from your Senior
              engineer
            </p>
            <div>
              <input
                required
                type="text"
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="block mt-3 px-2 py-3 pl-7 pr-12 w-full sm:text-sm border-gray-300 border-2 rounded-md"
                placeholder="eg: Is there a better way I can improve this lambda function?"
              />
            </div>
          </div>
          <div className="w-full mt-5">
            <p className="font-bold">Body</p>
            <p className="text-gray-500">
              Include all the information someone would need to understand your
              code
            </p>
            <div>
              <textarea
                required
                id="body"
                onChange={(e) => setBody(e.target.value)}
                value={body}
                className="block mt-3 px-2 py-3 pl-7 pr-12 w-full sm:text-sm border-gray-300 border-2 rounded-md"
              />
            </div>
          </div>
          <div className="w-full">
            <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 mt-3 hover:bg-red-500 md:py-4 md:text-lg md:px-10 transition duration-500 ease-in-out w-full">
              Create post
            </button>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default CreateCodeReviewPost;
