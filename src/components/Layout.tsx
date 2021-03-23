import React from "react";
import PropTypes from "prop-types";
import { Container } from "theme-ui";
import Header from "./Header";
import Main from "./Main";
import Content from "./Content";

export type LayoutProps = {
  // empty
};

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <Main>
      <Container>
        <Content>{children}</Content>
      </Container>
    </Main>
  </>
);
export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: ``,
};
