// Libraries
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Text = styled.div`
  line-height: 1.3;
  font-size: 1.25rem;
  font-weight: bold;
`;

const CardTitle = ({ title }) => (
  <div id="project-title">
    <Text>{title}</Text>
  </div>
);

CardTitle.propTypes = {
  title: PropTypes.string,
};

export default CardTitle;
