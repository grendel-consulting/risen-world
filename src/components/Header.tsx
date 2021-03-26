/** @jsx jsx */
import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { jsx, Box, Container } from "theme-ui";

export type HeaderProps = {
  data?: {
    site?: {
      siteMetadata?: {
        title?: string;
      };
    };
  };
};

export const PureHeader: React.FC<HeaderProps> = ({ data }) => (
  <header>
    <Box bg="primary" color="background" paddingY={2}>
      <Container>
        <h1 sx={{ margin: 0, fontSize: 4 }}>
          <Link to="/" sx={{ color: `inherit` }}>
            {data.site.siteMetadata.title}
          </Link>
        </h1>
      </Container>
    </Box>
  </header>
);

export const Header: React.FC<HeaderProps> = (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return <PureHeader {...props} data={data} />;
};
export default Header;
