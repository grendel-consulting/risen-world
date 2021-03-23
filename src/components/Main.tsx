import React from "react";
import PropTypes from "prop-types";

export type MainProps = {
  // empty
};

export const Main: React.FC<MainProps> = ({ children }) => (
  <main>{children}</main>
);
export default Main;

Main.propTypes = {
  children: PropTypes.node,
};

Main.defaultProps = {
  children: ``,
};
