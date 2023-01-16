import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect, Suspense } from "react";
import { db } from "../../lib/firebase/firebase";
import Container from "../Container";
import Link from "next/link";
import Spinner from "../Spinner";

const ViewFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const posts: any = await getDocs(collection(db, "posts"));
      setPosts(posts.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })));
    };

    getData();
  }, []);

  return (
    <Container variant="regular">
      <div className="flex flex-col items-center justify-between m-2">
        <div className="flex items-center justify-between w-full h-full">
          <h1 className="text-xl font-medium">Top Posts</h1>
          <Link href="/create">
            <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 md:py-4 md:text-lg md:px-10 transition duration-500 ease-in-out">
              Create a post
            </button>
          </Link>
        </div>
        {posts.map((data: any) => (
          <Suspense key={data.id} fallback={<Spinner />}>
            <div className="container mt-2 mx-auto px-4 md:px-12">
              <div className="flex flex-wrap -mx-1 lg:-mx-4">
                <div className="my-1 px-1 w-full lg:my-4 lg:px-4">
                  <article className="overflow-hidden rounded-lg shadow-lg">
                    <Link href={`posts/${data.id}`}>
                      <img
                        src={data.codeReviewImage}
                        width="600px"
                        height="500px"
                        alt="code block"
                        className="block h-auto w-full object-cover cursor-pointer"
                      />
                    </Link>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg">
                        <Link href={`posts/${data.id}`}>
                          <p className="no-underline hover:underline text-black cursor-pointer">
                            {data.title}
                          </p>
                        </Link>
                      </h1>
                    </header>

                    <footer className="flex items-center justify-between leading-none md:p-4">
                      <a className="flex items-center no-underline hover:underline text-black">
                        <img
                          width="28"
                          height="28"
                          alt="Profile picture"
                          className="block rounded-full w-7"
                          src={data.photoUrl}
                        />
                        <Link href={`u/${data.createdBy}`}>
                          <p className="ml-2 text-sm cursor-pointer">
                            {data.createdBy}
                          </p>
                        </Link>
                      </a>
                    </footer>
                  </article>
                </div>
              </div>
            </div>
          </Suspense>
        ))}
      </div>
    </Container>
  );
};

export default ViewFeed;
