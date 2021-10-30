import Container from "../Container";

const CreateCodeReviewPost = () => {
  return (
    <Container variant="regular">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="m-2 sm:m-0 flex flex-col w-full h-full"
      >
        <div className="w-full">
          <h1 className="text-2xl sm:text-4xl font-bold">
            Create a public post
          </h1>
          <div className="w-full border border-gray-500 mt-2"></div>
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
                className="block mt-3 px-2 py-3 pl-7 pr-12 w-full sm:text-sm border-gray-300 border-2 rounded-md"
              />
            </div>
          </div>
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
                      <label
                        className="w-64 flex flex-col items-center px-4 py-6
                      bg-white
                      rounded-md
                      shadow-md
                      tracking-wide
                      uppercase
                      border border-blue
                      cursor-pointer
                      hover:bg-red-600 hover:text-white
                      text-red-600
                      ease-linear
                      transition-all
                      duration-150
                    "
                      >
                        <span className="mt-2 text-base leading-normal">
                          Select a file
                        </span>
                        <input required type="file" className="hidden" />
                      </label>
                    </header>
                  </section>
                </article>
              </main>
            </div>
            <div className="w-full">
              <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 mt-3 hover:bg-red-500 md:py-4 md:text-lg md:px-10 transition duration-500 ease-in-out w-full">
                Create post
              </button>
            </div>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default CreateCodeReviewPost;