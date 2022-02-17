import styled from "styled-components";
import CategoryList from "components/Main/CategoryList";
import Header from "components/common/Header";
import { getCategory, getSaleItems } from "api/api";
import { CategoryData, SaleItem } from "types";
import { GetServerSideProps } from "next";
import ListContainer from "components/itemList/listContainer";
import SaleTitle from "components/Main/SaleTitle";

interface IProps {
  saleData: SaleItem;
  categories: CategoryData[];
}

const Index = ({ saleData, categories }: IProps) => {
  return (
    <MainContainer>
      <MainWrapper>
        <Header title="니콘내콘" icon="menu" />
        <CategoryList categories={categories} />
        <SaleTitle />
        <ListContainer items={saleData} />
      </MainWrapper>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  max-width: 627px;
  height: 94vh;
  padding-top: 5rem;
  margin: 0 auto;
  background-color: #f1f3f4;
`;

const MainWrapper = styled.div``;

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getCategory();
  const saleData = await getSaleItems();

  return {
    props: {
      saleData: saleData,
      categories: data.conCategory1s,
    },
  };
};

export default Index;
