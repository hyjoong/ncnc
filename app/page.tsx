import CategoryList from "components/Main/CategoryList";
import Header from "components/common/Header";
import { getCategory, getSaleItems } from "api/api";
import ListContainer from "components/itemList/listContainer";
import SaleTitle from "components/Main/SaleTitle";
import SEOHeader from "hooks/SEOHeader";

const getCategoryData = async () => {
  const categoryData = await getCategory();
  return categoryData;
};

const getSaleData = async () => {
  const saleData = await getSaleItems();
  return saleData;
};

const Home = async () => {
  const [categories, saleData] = await Promise.all([
    getCategoryData(),
    getSaleData(),
  ]);

  return (
    <>
      <SEOHeader
        title="니콘내콘"
        description={`니콘내콘에서 물건을 사고 파세요`}
        imageUrl={`${categories?.[0]?.imageUrl}`}
        siteUrl="https://ncnc.vercel.app"
      />
      <>
        <Header title="니콘내콘" icon="menu" />
        <CategoryList categories={categories} />
        <SaleTitle />
        <ListContainer items={saleData} />
      </>
    </>
  );
};

export default Home;
