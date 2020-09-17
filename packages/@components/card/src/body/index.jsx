// Libraries
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  margin: 0px 25px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  height: 78px;
`;

const Text = styled.div`
  line-height: 1.3;
  font-size: 1.25rem;
  color: #707070;
`;

const CardBody = ({ children }) => (
  <Container>
    <Text>{children}</Text>
  </Container>
);

CardBody.propTypes = {
  children: PropTypes.element,
};

export default CardBody;
