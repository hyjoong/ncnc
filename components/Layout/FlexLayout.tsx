import React from "react";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
}

const FlexLayout = ({ children }: IProps) => {
  return <GridWrapper>{children}</GridWrapper>;
};

const GridWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
`;

export default FlexLayout;
