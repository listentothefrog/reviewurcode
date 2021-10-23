import { auth } from "../../lib/firebase/firebase";
import Image from "next/image";
const CodeReviewCard = () => {
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        <div className="my-1 px-1 w-full lg:my-4 lg:px-4">
          <article className="overflow-hidden rounded-lg shadow-lg">
            <a href="#">
              <Image
                width="600px"
                height="500px"
                objectFit="cover"
                alt="code block"
                className="block h-auto w-full"
                src={auth.currentUser?.photoURL! as string}
              />
            </a>

            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="text-lg">
                <a className="no-underline hover:underline text-black" href="#">
                  Remove calender from react bootstrap datepicker
                </a>
              </h1>
              <p className="text-grey-darker text-sm">10/23/21</p>
            </header>

            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <a
                className="flex items-center no-underline hover:underline text-black"
                href="#"
              >
                <Image
                  width="28"
                  height="28"
                  alt="Profile picture"
                  className="block rounded-full w-7"
                  src={auth.currentUser?.photoURL! as string}
                />
                <p className="ml-2 text-sm">{auth.currentUser?.displayName}</p>
              </a>
              <a
                className="no-underline text-grey-darker hover:text-red-dark"
                href="#"
              >
                <span className="hidden">Like</span>
              </a>
            </footer>
          </article>
        </div>
      </div>
    </div>
  );
};

export default CodeReviewCard;
