import styled from "styled-components";
import CategoryList from "components/Main/CategoryList";
import Header from "components/common/Header";
import { getCategory, getSaleItems } from "api/api";
import { CategoryData, SaleItem } from "types";
import ListContainer from "components/itemList/listContainer";
import SaleTitle from "components/Main/SaleTitle";
import SEOHeader from "hooks/SEOHeader";

interface IProps {
  saleData: SaleItem;
  categories: CategoryData[];
}

const Index = ({ saleData, categories }: IProps) => {
  return (
    <>
      <SEOHeader
        title="니콘내콘"
        description={`니콘내콘에서 물건을 사고 파세요`}
        imageUrl={`${categories[0].imageUrl}`}
        siteUrl="https://ncnc.vercel.app"
      />
      <MainContainer>
        <MainWrapper>
          <Header title="니콘내콘" icon="menu" />
          <CategoryList categories={categories} />
          <SaleTitle />
          <ListContainer items={saleData} />
        </MainWrapper>
      </MainContainer>
    </>
  );
};

export const getStaticProps = async () => {
  const [categories, saleData] = await Promise.all([
    getCategory(),
    getSaleItems(),
  ]);

  return {
    props: {
      categories,
      saleData,
    },
    revalidate: 604800,
  };
};

const MainContainer = styled.div`
  max-width: 627px;
  height: 94vh;
  padding-top: 5rem;
  margin: 0 auto;
  background-color: #f1f3f4;
`;

const MainWrapper = styled.div``;

export default Index;
