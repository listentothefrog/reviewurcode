import dynamic from "next/dynamic";
import Container from "../Container";
const CodeReviewCard = dynamic(() => import("./CodeReviewCard"));

const ViewFeed = () => {
  return (
    <Container variant="regular">
      <div className="flex flex-col items-center justify-between m-2">
        <div className="flex items-center justify-between w-full h-full">
          <h1 className="text-xl font-medium">Top Questions</h1>
          <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 md:py-4 md:text-lg md:px-10 transition duration-500 ease-in-out">
            Create a post
          </button>
        </div>
        <CodeReviewCard />
      </div>
    </Container>
  );
};

export default ViewFeed;
