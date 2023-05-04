import React from "react";
import styled from "styled-components";
import Header from "components/common/Header";
import { GetStaticProps } from "next";
import { getProductList, getBrandTitle, getCategory, getBrand } from "api/api";
import ListContainer from "components/itemList/listContainer";
import { BrandType, BrandListType, CategoryData } from "types";
import SEOHeader from "hooks/SEOHeader";

interface IProps {
  items: BrandType;
  title: string;
}

const ItemList = ({ items, title }: IProps) => {
  return (
    <>
      <SEOHeader
        title={`${title}`}
        description={`${title}상품들을 만나보세요!`}
        imageUrl={`${items.conItems[0].imageUrl}`}
        siteUrl={`https://ncnc.vercel.app/itemlist`}
      />
      <Wrapper>
        <Header title={title} />
        <ListContainer items={items} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  max-width: 627px;
  height: 93vh;
  padding: 5rem 0;
  margin: 0 auto;
  background-color: white;
`;

export const getStaticPaths = async () => {
  const categories = await getCategory();
  const brandCategories = await Promise.all(
    categories.map(({ id }) => getBrand(id))
  );
  const pathNums = getItemListPath(brandCategories);

  const paths = pathNums.map((num) => ({
    params: { id: num.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const res = await getBrandTitle(Number(id));
  const response = await getProductList(Number(id));

  return {
    props: {
      title: res.conCategory2.name,
      items: response,
    },
    revalidate: 60,
  };
};

export default ItemList;

const getItemListPath = (brandCategories: any) =>
  brandCategories
    .slice(1)
    .map((category) => category!.conCategory2s.map((brand) => brand.id))
    .flatMap((i) => i);
