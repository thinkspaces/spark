// Libraries
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  max-height: min-content;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  color: steelblue;
  padding-top: 10px;
`;

const CardTags = ({ tags = [] }) => (
  <Container>
    {tags.map((tag, idx) => (
      <span key={idx}>#{tag ? tag.name : ""}&nbsp;</span>
    ))}
  </Container>
);

CardTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object),
};

export default CardTags;
