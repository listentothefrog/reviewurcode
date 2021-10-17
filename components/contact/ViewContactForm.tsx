import Container from "../Container";
import {
  EmailInputFeild,
  MessageInputFeild,
  YourNameInputFeild,
} from "./FormField";
import { useForm } from "@formspree/react";
import React from "react";

const ViewContactForm = () => {
  const [state, handleSubmit] = useForm("xknkaowe");
  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        Thanks for sending a message we will respond to your message asap.
      </div>
    );
  }
  return (
    <Container variant="regular">
      <div className="flex flex-col items-center justify-center p-2">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-5xl sm:text-4xl font-bold">
            Get in touch with us
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-500">
            We'd love to hear form you! Send us a message using the form
            oppisite, or email us. Ask us anything about the product and what we
            do, your thoughts are not limited!
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex items-start flex-1 flex-col w-full mt-3"
        >
          <YourNameInputFeild />
          <EmailInputFeild />
          <MessageInputFeild />
          <div className="w-full">
            <button className="w-full py-3 rounded-md text-white bg-red-500 hover:bg-red-600 transition duration-500 ease-in-out  mt-3">
              Swooosh 💨
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default ViewContactForm;
