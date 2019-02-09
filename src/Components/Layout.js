import React, { Fragment } from "react";

import Header from "./Header";
import Container from "./Container";

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <Container>{children}</Container>
  </Fragment>
);

export default Layout;
