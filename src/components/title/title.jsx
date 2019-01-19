import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import "./title.css";

const Title = ({ path }) => {
  return (
    <Helmet>
      <title>{path} - xura.me</title>
    </Helmet>
  );
};

Title.propTypes = {
  path: PropTypes.string.isRequired
};

export default Title;
