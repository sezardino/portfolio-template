import {
  About,
  Contact,
  Experience,
  Hero,
  Portfolio,
} from "@/components/sections";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
