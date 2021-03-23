import React from "react";
import PropTypes from "prop-types";
import { Box } from "theme-ui";

export type ContentProps = {
  // empty
};

export const Content: React.FC<ContentProps> = ({ children }) => (
  <Box paddingY="5">{children}</Box>
);
export default Content;

Content.propTypes = {
  children: PropTypes.node,
};

Content.defaultProps = {
  children: ``,
};
