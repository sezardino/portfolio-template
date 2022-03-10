import {
  About,
  Contact,
  Experience,
  Hero,
  Portfolio,
} from "@/components/sections";
import { SectionsIds } from "@/types";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Hero id={SectionsIds.HOME} />
      <About id={SectionsIds.ABOUT} />
      <Experience id={SectionsIds.EXPERIENCE} />
      <Portfolio id={SectionsIds.PORTFOLIO} />
      <Contact id={SectionsIds.CONTACT} />
    </>
  );
};

export default Home;
