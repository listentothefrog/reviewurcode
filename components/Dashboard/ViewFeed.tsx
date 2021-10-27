import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../lib/firebase/firebase";
import Container from "../Container";
import CodeReviewCard from "./CodeReviewCard";

const ViewFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const posts: any = await getDocs(collection(db, "posts"));
      console.log(posts);
      setPosts(posts.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })));
      console.log(posts);
    };

    getData();
  }, []);

  return (
    <Container variant="regular">
      <div className="flex flex-col items-center justify-between m-2">
        <div className="flex items-center justify-between w-full h-full">
          <h1 className="text-xl font-medium">Top Posts</h1>
          <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 md:py-4 md:text-lg md:px-10 transition duration-500 ease-in-out">
            Create a post
          </button>
        </div>
        {posts.map((data: any) => (
          <CodeReviewCard
            key={data.id}
            photoUrl={data.photoUrl}
            title={data.title}
            upVotes={data.upVotes}
            createdBy={data.createdBy}
            codeReviewImage={data.codeReviewImage}
          />
        ))}
      </div>
    </Container>
  );
};

export default ViewFeed;
