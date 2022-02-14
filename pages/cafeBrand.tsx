import React from "react";
import styled from "styled-components";
import BrandList from "components/CafeBrand/BrandList";

const CafeBrand = () => {
  return (
    <Wrapper>
      <BrandList />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: 375px;
  padding-bottom: 5rem;
  margin: 0 auto;
  background-color: #f1f3f4;
`;
export default CafeBrand;
