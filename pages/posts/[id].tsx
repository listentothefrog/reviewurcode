import { getDoc, doc, increment, updateDoc } from "@firebase/firestore";
import { GetServerSideProps } from "next";
import { db } from "../../lib/firebase/firebase";
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
  console.log(data);
  if (!data) return { notFound: true };
  return { props: { data } };
};

const Post = ({ data }: any) => {
  const { addToast } = useToasts();
  const [upVote, setUpVote] = useState(0);
  const [downVote, setDownVote] = useState(0);
  const [upVoteActive, setUpVoteActive] = useState(true);
  const [downVoteActive, setDownVoteActive] = useState(true);

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
        setUpVoteActive(!upVoteActive);
      })
      .catch((error: Error) => {
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
        setDownVoteActive(!downVoteActive);
      })
      .catch((error: Error) => {
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
        <meta name="description" content={data.body} />
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
            <p className="text-base sm:text-sm text-blue-500 cursor-pointer hover:underline">
              {data.createdBy}
            </p>
          </div>
        </div>
        <div className="w-full border border-gray-500 mt-2"></div>

        <div className="mt-5 flex items-center">
          <div className="flex flex-col items-center">
            <button
              className={upVoteActive ? "cursor-pointer" : "cursor-not-allowed"}
              onClick={() => upVotePost()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="gray"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </button>
            {data.upVotes}
            <button
              className={
                downVoteActive ? "cursor-pointer" : "cursor-not-allowed"
              }
              onClick={() => downVotePost()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="gray"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                />
              </svg>
            </button>
          </div>
          <p className="sm:text-base text-xl ml-5">{data.body}</p>
        </div>
        <div>
          <img
            className="w-full mt-5"
            src={data.codeReviewImage}
            alt="code snippet"
          />
        </div>
        <a
          href={`https://twitter.com/intent/tweet?url=http://localhost:3000${asPath}`}
        >
          <button className="flex items-center mt-2 justify-start px-8 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
            <TwitterIcon width="24" height="20" />
            <span className="ml-3">Share on Twitter</span>
          </button>
        </a>
      </div>
    </Container>
  );
};

export default Post;
