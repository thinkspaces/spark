// Libraries
import styled from "styled-components";

export const Container = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 2rem;
  margin-bottom: 30px;
  min-width: 318px;
  max-width: 320px;

  :hover {
    cursor: pointer;
  }

  :hover #project-title {
    text-decoration: underline;
    color: #0056b3;
  }
`;

export const SubContent = styled.div`
  margin-top: auto;
  margin-left: auto;
  margin-right: 30px;
  margin-bottom: 30px;
`;

export const CardHeader = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 30px 25px 15px;
  max-height: min-content;
`;
