import React from "react";
import { graphql, useStaticQuery, PageProps } from "gatsby";
import { Badge, Text } from "theme-ui";
import Layout from "../components/Layout";

export type PostProps = PageProps & {
  pageContext: {
    frontmatter: { [k: string]: string };
  };
};

const Post: React.FC<PostProps> = ({
  children,
  pageContext: {
    frontmatter: { author, title },
  },
}) => {
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
      <Badge variant="accent">
        <Text variant="mono">Post template</Text>
      </Badge>
      <h1>{title}</h1>
      <span>{author}</span>
      {children}
    </Layout>
  );
};
export default Post;
