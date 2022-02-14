import React from "react";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
}

const GridLayout = ({ children }: IProps) => {
  return <GridWrapper>{children}</GridWrapper>;
};

const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 2px;
  column-gap: 2px;
  margin: 2rem;
`;

export default GridLayout;
