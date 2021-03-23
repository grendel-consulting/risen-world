import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import { Badge, Text } from "theme-ui";
import Layout from "../components/Layout";

export type PageTemplateProps = {
  // empty
};

const Page: React.FC<PageTemplateProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Layout>
      <Badge variant="secondary">
        <Text variant="mono">Page template</Text>
      </Badge>
      {children}
    </Layout>
  );
};
export default Page;

Page.propTypes = {
  children: PropTypes.node,
};

Page.defaultProps = {
  children: ``,
};
