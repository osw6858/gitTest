import styled from "styled-components";

type container = {
  height?: string;
};

const Container = styled.div<container>`
  height: ${({ height }) => height || "100"}vh;
  background-color: gray;
`;

export { Container };
