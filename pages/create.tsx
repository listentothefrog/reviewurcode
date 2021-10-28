import dynamic from "next/dynamic";
const CreateCodeReviewPost = dynamic(
  () => import("../components/dashboard/CreateCodeReviewPost")
);

const create = () => {
  return (
    <div>
      <CreateCodeReviewPost />
    </div>
  );
};

export default create;
