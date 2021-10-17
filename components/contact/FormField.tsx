import { useState } from "react";

export const YourNameInputFeild = () => {
  const [fullName, setFullName] = useState("");
  return (
    <div className="w-full">
      <span className="font-bold">Your Name: </span>
      <input
        className="border-2 py-2 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
        onChange={(e) => setFullName(e.target.value)}
        value={fullName}
      />
    </div>
  );
};

export const EmailInputFeild = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="mt-2 w-full">
      <span className="font-bold">Your Email: </span>
      <input
        className="border-2 py-2 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
    </div>
  );
};

export const MessageInputFeild = () => {
  const [userMessage, setUserMessage] = useState("");
  return (
    <div className="mt-3 w-full">
      <span className="font-bold">Your Message: </span>
      <textarea
        className="border-2 py-2 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
        onChange={(e) => setUserMessage(e.target.value)}
        value={userMessage}
      />
    </div>
  );
};
