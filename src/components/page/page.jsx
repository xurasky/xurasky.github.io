import React from "react";
import Title from "../title";
import PropTypes from "prop-types";

import "./page.css";

const Page = ({ children, path }) => {
  return (
    <div>
      <Title path={path} />
      {children}
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired
};

export default Page;
