import { About, Experience, Hero, Portfolio } from "@/components/sections";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Portfolio />
    </>
  );
};

export default Home;
