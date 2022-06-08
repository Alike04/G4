import styled from "styled-components";

export const ViewPort = styled.div`
  height: ${(props) => props.height};
  width: 100%;
  background-color: black;
  color: white;
`;
export const ContentContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 75%;
  height: 100%;
`;
export const Line = styled.br`
  margin: 0;
  height: 5px;
`;
