import dynamic from "next/dynamic";
const LoginPage = dynamic(() => import("../components/landing-page/LoginPage"));

const Home = () => {
  return <LoginPage />;
};

export default Home;
