interface Post {
  title: string;
  upVotes: number;
  createdBy: string;
  codeReviewImage: string;
  photoUrl: string;
}

const CodeReviewCard: React.FC<Post> = (props) => {
  const { title, upVotes, createdBy, codeReviewImage, photoUrl } = props;
  return (
    <div className="container mt-2 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        <div className="my-1 px-1 w-full lg:my-4 lg:px-4">
          <article className="overflow-hidden rounded-lg shadow-lg">
            <a href="#">
              <img
                src={codeReviewImage! as string}
                width="600px"
                height="500px"
                alt="code block"
                className="block h-auto w-full object-cover"
              />
            </a>

            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="text-lg">
                <a className="no-underline hover:underline text-black" href="#">
                  {title}
                </a>
              </h1>
            </header>

            <footer className="flex items-center justify-between leading-none md:p-4">
              <a className="flex items-center no-underline hover:underline text-black">
                <img
                  width="28"
                  height="28"
                  alt="Profile picture"
                  className="block rounded-full w-7"
                  src={photoUrl}
                />
                <p className="ml-2 text-sm">{createdBy}</p>
              </a>
              <p className="ml-2 text-sm">
                <span className="text-green-600">{upVotes}</span> upvotes
              </p>
            </footer>
          </article>
        </div>
      </div>
    </div>
  );
};

export default CodeReviewCard;
