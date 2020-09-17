// Libraries
import React from "react";
import PropTypes from "prop-types";

// Components
import CardImage from "./image";
import CardTitle from "./title";
import CardBody from "./body";
import CardTags from "./tags";

// Styles
import { Container, CardHeader, SubContent } from "./styles";

const Card = ({
  children,
  description = "",
  imageSrc = "https://via.placeholder.com/300",
  onClick = () => {},
  name = "",
  tags = [],
}) => {
  return (
    <Container onClick={onClick}>
      <CardHeader>
        <section>
          <CardTitle title={name} />
          <CardTags tags={tags} />
        </section>
        <CardImage src={imageSrc} />
      </CardHeader>
      <CardBody>{description}</CardBody>
      <SubContent>{children}</SubContent>
    </Container>
  );
};

Card.propTypes = {
  children: PropTypes.element,
  description: PropTypes.string,
  imageSrc: PropTypes.string,
  onClick: PropTypes.func,
  name: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.object),
};

export default Card;
