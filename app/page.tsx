import CategoryList from "components/Main/CategoryList";
import Header from "components/common/Header";
import ListContainer from "components/itemList/listContainer";
import SaleTitle from "components/Main/SaleTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "니콘내콘",
  description: "니콘내콘에서 물건을 사고 파세요",
  openGraph: {
    url: `https://ncnc.vercel.app`,
    title: "니콘내콘",
    description: "니콘내콘에서 물건을 사고 파세요",
  },
};

const getCategoryData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URI}/con-category1s`);
  const data = await res.json();
  const { conCategory1s } = data;
  return conCategory1s;
};

const getSaleData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URI}/con-items/soon`, {
    next: { revalidate: 86400, tags: ["main"] },
  });
  const data = await res.json();
  return data;
};

const Home = async () => {
  const [categories, saleData] = await Promise.all([
    getCategoryData(),
    getSaleData(),
  ]);

  return (
    <>
      <Header title="니콘내콘" icon="menu" />
      <CategoryList categories={categories} />
      <SaleTitle />
      <ListContainer items={saleData} />
    </>
  );
};

export default Home;
