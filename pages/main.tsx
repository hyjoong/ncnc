import styled from "styled-components";
import CategoryList from "components/Main/CategoryList";

const Main = () => {
  return (
    <MainWrapper>
      <CategoryList />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  max-width: 375px;
  background-color: #f1f3f4;
  margin: 0 auto;
`;

export default Main;
