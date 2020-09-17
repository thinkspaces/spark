// Libraries
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Img = styled.img`
  max-width: 120px;
  max-height: 84px;
  width: auto;
  height: auto;
`;

const CardImage = ({ src }) => <Img src={src} alt="project cover" />;

CardImage.propTypes = {
  src: PropTypes.string,
};

export default CardImage;
