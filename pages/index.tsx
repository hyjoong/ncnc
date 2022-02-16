import styled from "styled-components";
import CategoryList from "components/Main/CategoryList";
import Header from "components/common/Header";
import { getCategory } from "api/api";
import { CategoryData } from "types";

interface IProps {
  categories: CategoryData[];
}

const Index = ({ categories }: IProps) => {
  console.log(categories);

  return (
    <>
      <MainWrapper>
        <Header title="니콘내콘" icon="menu" />
        <CategoryList categories={categories} />
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.div`
  max-width: 627px;
  background-color: #f1f3f4;
  margin: 0 auto;
`;

export const getStaticProps = async () => {
  const data = await getCategory();

  return {
    props: {
      categories: data.conCategory1s,
    },
  };
};

export default Index;
