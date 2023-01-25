import GithubIcon from "../../icons/Github";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../lib/firebase/firebase";
import { useRouter } from "next/dist/client/router";
import { githubOAuth } from "../../lib/auth";
import Image from "next/image";
import CheckIcon from "../../icons/cards-icons/Check";
import Light from "../../icons/cards-icons/light-bulb";
import Compliance from "../../icons/cards-icons/compliance";
import security from "../../icons/cards-icons/security";

const features = [
  {
    name: "Improve Code Quality",
    description:
      "Code reviews enable developers to identify bugs, logic problems, and other issues before they become major problems. This helps ensure the quality of the code and prevents bugs and errors from getting into the project. ",
    icon: CheckIcon,
  },
  {
    name: "Spread Knowledge",
    description:
      "Code reviews help developers learn the code base, as well as help them learn new technologies and techniques that grow their skill sets. ",
    icon: Light,
  },
  {
    name: "Enhance Security",
    description:
      "Code reviews create a high level of security, especially when security professionals engage in a targeted review. This helps to identify vulnerabilities and alert developers to the threat.",
    icon: security,
  },
  {
    name: "Maintain Compliance",
    description:
      "Code reviews help ensure coding standards are being met and help teams adhere to a standard coding style.",
    icon: Compliance,
  },
];

const LoginPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  if (loading) return <h1 className="text-red-500">Loading...</h1>;
  else if (error) return console.log(error);
  else if (user) {
    router.push("/dash");
  }
  return (
    <div>
      <div className="relative bg-white overflow-hidden">
        <div className="flex max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">
                    An online platform to{" "}
                  </span>{" "}
                  <span className="block text-red-500 xl:inline">
                    review your code
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  <span className="font-bold">ReviewurCode</span> is a platform
                  for people to review code easily and efficiently. With our
                  user-friendly interface, you can quickly review code and get
                  feedback from experienced developers. Our code review service
                  helps you to save time and avoid bugs while ensuring your code
                  is up-to-date and bug-free.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <button
                      onClick={githubOAuth}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-900 md:py-4 md:text-lg md:px-10"
                    >
                      <GithubIcon width="24" height="20" />
                      <span className="ml-3">Login with Github</span>
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            width="2000"
            height="1025"
            className="h-screen w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
            alt="coding group"
          />
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <h2 className="text-lg font-semibold leading-8 text-red-500">
              Code Review
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              A better way to review your code
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-md leading-8 text-gray-600">
              Our website is different from other platforms in that we focus on
              providing a code review platform. We provide powerful tools to
              help you review code and identify any potential issues. Our
              platform is free to use, with no upfront costs or hidden fees for
              new developers.
            </p>
          </div>

          <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-white sm:shrink-0">
                    <feature.icon aria-hidden="true" />
                  </div>
                  <div className="sm:min-w-0 sm:flex-1">
                    <p className="text-lg font-semibold leading-8 text-gray-900">
                      {feature.name}
                    </p>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
