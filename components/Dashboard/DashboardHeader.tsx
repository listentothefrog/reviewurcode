import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import React, { Fragment } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Logo from "../../icons/logo/Logo";
import { auth } from "../../lib/firebase/firebase";

const DashboardHeader = () => {
  const [user] = useAuthState(auth);
  const navigation = [
    {
      name: "Contributions",
      href: "https://github.com/listentothefrog/reviewurcode",
    },
    {
      name: "Report a bug",
      href: "https://github.com/listentothefrog/reviewurcode/issues",
    },
    {
      name: "Investors",
      href: "https://twitter.com/listentothefrog",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <div className="relative h-24 w-full bg-gray-100">
      <Popover>
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            className="relative flex items-center justify-between sm:h-10"
            aria-label="Global"
          >
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="/">
                  <Logo cursor="pointer" width="34" height="44" />
                </a>
                {/* Menu Icon */}
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 mr-4 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-medium text-gray-900 hover:text-gray-700"
                >
                  {item.name}
                </a>
              ))}
              <span className="font-medium text-indigo-600 hover:text-indigo-500">
                {auth.currentUser ? "" : "Log in"}
              </span>
            </div>
            {/* Search */}
            <div className="hidden sm:flex mr-2 w-3/5">
              <input
                type="text"
                id="search"
                className="block px-2 py-2 pl-7 pr-12 w-full sm:text-sm border-gray-300 bg-white text-gray-400 rounded-md"
                placeholder="Search..."
              />
              <div className="flex items-center bg-gray-200 px-3 rounded-md cursor-pointer">
                🔍
              </div>
            </div>
            <a href={`settings/${user?.reloadUserInfo.screenName}`}>
              <img
                width="50px"
                height="50px"
                src={auth.currentUser?.photoURL! as string}
                className="rounded-full sm:w-10 w-0 cursor-pointer"
                alt="user profile picture"
              />
            </a>
          </nav>
        </div>
        {/*  Mobile Header */}
        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <Logo width="34" height="44" />
                </div>
                <div>
                  <Popover.Button className="bg-gray-100 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="flex">
                <input
                  type="text"
                  className="block w-full py-2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Search..."
                />
                <div className="flex items-center bg-gray-200 px-2 rounded-lg cursor-pointer">
                  🔍
                </div>
              </div>
              <a
                href="#"
                className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 mt-2"
              >
                {auth.currentUser ? "Profile" : "Log in"}
              </a>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default DashboardHeader;
