import React, { Suspense } from "react";

const ViewContactForm = React.lazy(
  () => import("../components/contact/ViewContactForm")
);

const contact = () => {
  return (
    <>
      <Suspense fallback="Loading...">
        <ViewContactForm />
      </Suspense>
    </>
  );
};

export default contact;
