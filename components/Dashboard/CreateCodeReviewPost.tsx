import Container from "../Container";

const CreateCodeReviewPost = () => {
  return (
    <Container variant="regular">
      <div className="flex flex-col w-full h-full">
        <div className="w-full">
          <p className="font-bold">Title: </p>
          <input
            type="text"
            id="search"
            className="block mt-2 px-2 py-3 pl-7 pr-12 w-full sm:text-sm border-gray-300 border-2 rounded-md"
            placeholder="eg: Is there a better way I can improve this lambda function?"
          />
        </div>
      </div>
    </Container>
  );
};

export default CreateCodeReviewPost;
