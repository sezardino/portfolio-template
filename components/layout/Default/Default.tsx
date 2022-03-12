import React from "react";

import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

import * as Layout from "./Default.styles";

export const DefaultLayout: React.FC = (props) => {
  const { children } = props;

  return (
    <Layout.Wrapper>
      <Layout.Navbar>
        <Navbar />
      </Layout.Navbar>
      <main>{children}</main>
      <Footer />
    </Layout.Wrapper>
  );
};
