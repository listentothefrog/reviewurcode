import { getDoc, doc, increment, updateDoc } from "@firebase/firestore";
import { GetServerSideProps } from "next";
import { auth, db } from "../../lib/firebase/firebase";
import Head from "next/head";
import RedStone from "../../public/RedStone.png";
import Container from "../../components/Container";
import TwitterIcon from "../../icons/Twitter";
import { useRouter } from "next/router";
import { useState } from "react";
import { useToasts } from "react-toast-notifications";

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const docRef = doc(db, "posts", ctx.query.id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  if (!data) return { notFound: true };
  return { props: { data } };
};

const Post = ({ data }: any) => {
  const { addToast } = useToasts();
  const [upVote, setUpVote] = useState(0);
  const [downVote, setDownVote] = useState(0);

  const router = useRouter();
  const { id } = router.query;
  const { asPath } = useRouter();

  const upVotePost = async () => {
    setUpVote(upVote + 1);
    const docRef = doc(db, "posts", id! as any);
    await updateDoc(docRef, {
      upVotes: increment(1),
    })
      .then(() => {
        addToast("Upvoted post succesfully just refresh the page 👍", {
          appearance: "info",
          autoDismiss: true,
        });
      })
      .catch((error: Error) => {
        console.log(error.message);
        if (error.message === "Missing or insufficient permissions.") {
          addToast("Please log in to vote on posts", {
            appearance: "error",
            autoDismiss: true,
          });
        }
      });
  };

  const downVotePost = async () => {
    setDownVote(downVote - 1);
    const docRef = doc(db, "posts", id! as any);
    await updateDoc(docRef, {
      upVotes: increment(-1),
    })
      .then(() => {
        addToast("Downvoted post succesfully just refresh the page 👎", {
          appearance: "info",
          autoDismiss: true,
        });
      })
      .catch((error: Error) => {
        console.log(error.message);
        if (error.message === "Missing or insufficient permissions.") {
          addToast("Please log in to vote on posts", {
            appearance: "error",
            autoDismiss: true,
          });
        }
      });
  };

  if (!data) {
    return "Loading...";
  }

  return (
    <Container variant="regular">
      <Head>
        <title>{data.title}</title>
        <html lang="en" />
        <link rel="shortcut icon" href={RedStone.src} type="image/x-icon" />
        <meta name="description" content={data.body! as any} />
        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="" /> */}
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.body} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={data.title} />
        <meta property="twitter:description" content={data.body} />
      </Head>

      <div className="m-1 sm:m-2">
        <div className="flex items-center justify-evenly w-full flex-col sm:flex-row">
          <div className="w-full">
            <h1 className="text-xl sm:text-3xl font-medium">{data.title}</h1>
          </div>
          <div className="flex items-center justify-items-start sm:justify-items-end">
            <p className="text-base sm:text-sm text-blue-600 cursor-pointer hover:underline">
              {data.createdBy}
            </p>
          </div>
        </div>
        <div className="w-full border border-gray-500 mt-2"></div>
        <div className="mt-5 flex items-center">
          <p className="sm:text-base text-xl">{data.body}</p>
        </div>
        <div>
          <img
            width="800px"
            height="800px"
            className="w-full mt-5 rounded-b-md"
            src={data.codeReviewImage}
            alt="code snippet"
          />
        </div>
        <a
          href={`https://twitter.com/intent/tweet?url=http://localhost:3000${asPath}`}
        >
          <button className="flex items-center mt-2 justify-start px-8 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            <TwitterIcon width="24" height="20" />
            <span className="ml-3">Share on Twitter</span>
          </button>
        </a>
      </div>
    </Container>
  );
};

export default Post;
