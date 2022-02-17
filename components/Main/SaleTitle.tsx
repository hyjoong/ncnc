import React from "react";
import styled from "styled-components";

const SaleTitle = () => {
  return (
    <SaleTitleContainer>
      <SaleHeader>놓치지 마세요</SaleHeader>
      <SaleContent>오늘의 떙처리콘!</SaleContent>
    </SaleTitleContainer>
  );
};

const SaleTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 1rem 1rem;
`;

const SaleHeader = styled.span`
  font-size: 14px;
  color: red;
  margin-bottom: 5px;
`;

const SaleContent = styled.span`
  font-weight: 700;
`;

export default SaleTitle;
