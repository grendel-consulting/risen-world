import React from "react";
import { PageProps, Link, graphql } from "gatsby";
import { Styled } from "theme-ui";
import { Layout } from "../components/Layout";

type BlogIndexProps = PageProps & {
  data: {
    allSitePage: {
      nodes: {
        id: string;
        path: string;
        context?: {
          frontmatter?: {
            author?: string;
            date?: string;
            excerpt?: string;
            featureImage?: string;
            title?: string;
          };
        };
      }[];
    };
  };
};

const BlogIndex: React.FC<BlogIndexProps> = (props) => {
  const { data } = props;
  const { nodes: pages } = data.allSitePage;

  return (
    <Layout>
      <Styled.h1>Dev Blog</Styled.h1>

      <Styled.ul>
        {pages.map(({ id, path, context: { frontmatter } }) => (
          <Styled.li key={id}>
            <Link to={path}>
              {frontmatter?.title ? `${frontmatter.title} ` : `Untitled `}
            </Link>
            (<code>{path}</code>)
          </Styled.li>
        ))}
      </Styled.ul>
    </Layout>
  );
};
export default BlogIndex;

export const pageQuery = graphql`
  query AllPagesQuery {
    allSitePage(filter: { componentPath: { regex: "/.*posts.*/" } }) {
      nodes {
        id
        path
        context {
          frontmatter {
            author
            date
            excerpt
            featureImage
            title
          }
        }
      }
    }
  }
`;
