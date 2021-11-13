import { getDoc, doc } from "@firebase/firestore";
import { GetServerSideProps } from "next";
import { db } from "../../lib/firebase/firebase";


export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const docRef = doc(db, "posts", ctx.query.id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data()
  console.log(data)
  if (!data) return { notFound: true };
  return { props: { data } };
};

const Post = ({data}: any) => {
  if (!data) {
    return "Loading...";
  }

  return (
    <div>
      <p>Title: {data.title}</p>
      <p>Description: {data.body}</p>
      <img src={data.codeReviewImage} alt="code snippet" />
      <p>Author: {data.createdBy}</p>
    </div>
  );
}

export default Post;