import styled, { css } from "styled-components";

const outlinedStyle = css`
  border: 1px solid ${(props) => props.color || "#ff6e6e"};
  color: ${(props) => props.color || "#ff6e6e"};
  font-weight: bold;
  padding: 0.2em 0.5em;
  :focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem #d7d9e8;
  }
`;

const linkStyle = css`
  font-size: 20px;
  font-weight: bold;
  border: 2px solid transparent;
  color: ${(props) => props.color || "#ff6e6e"};
  padding: 0.4em 1em;

  :hover {
    text-decoration: underline;
  }

  :focus {
    outline: none;
  }
`;

const defaultStyle = css`
  border: 2px solid ${(props) => props.color || "#ff6e6e"};
  background: ${(props) => props.color || "#ff6e6e"};
  color: white;
  font-weight: bold;
  padding: 0.4em 1em;

  :hover {
    filter: brightness(95%);
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem #d7d9e8;
  }
`;

const Container = styled.button`
  font-family: HelveticaNeue;
  border-radius: 3px;
  background: white;
  ${(props) => props.styles};
`;

export { Container, outlinedStyle, linkStyle, defaultStyle };
