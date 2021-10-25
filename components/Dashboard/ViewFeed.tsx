import dynamic from "next/dynamic";
import Container from "../Container";
import { db } from "../../lib/firebase/firebase";
const CodeReviewCard = dynamic(() => import("./CodeReviewCard"));
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
} from "firebase/firestore/lite";

interface Post {
  id: string;
  title: string;
  upVotes: number;
  createdBy: string;
  createdAt: string;
}

const ViewFeed: any = async () => {
  const postsRef = collection(db, "discussions");
  query(postsRef, orderBy("createdAt"), limit(20));
  const [posts]: any = await getDocs(postsRef); // ! bug is right here
  return (
    <Container variant="regular">
      <div className="flex flex-col items-center justify-between m-2">
        <div className="flex items-center justify-between w-full h-full">
          <h1 className="text-xl font-medium">Top Posts</h1>
          <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 md:py-4 md:text-lg md:px-10 transition duration-500 ease-in-out">
            Create a post
          </button>
        </div>
        {posts &&
          posts.map((post: Post) => (
            <CodeReviewCard
              key={post.id}
              title={post.title}
              createdAt={post.createdAt}
              createdBy={post.createdBy}
              upVotes={post.upVotes}
            />
          ))}
      </div>
    </Container>
  );
};

export default ViewFeed;
