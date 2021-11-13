import { getDoc, doc } from "@firebase/firestore";
import { GetServerSideProps } from "next";
import { db } from "../../lib/firebase/firebase";
import Head from "next/head";
import RedStone from "../../public/RedStone.png";
import Container from "../../components/Container";
import TwitterIcon from "../../icons/Twitter";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const docRef = doc(db, "posts", ctx.query.id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  console.log(data);
  if (!data) return { notFound: true };
  return { props: { data } };
};

const Post = ({ data }: any) => {
  const { asPath } = useRouter();
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

        <div className="mt-5">
          <p className="sm:text-base text-xl">{data.body}</p>
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
