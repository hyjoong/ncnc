import React from "react";
import ListContainer from "components/itemList/listContainer";
import SEOHeader from "hooks/SEOHeader";
import Header from "components/common/Header";
import { BrandItemListType } from "types";

type Params = { params: { id: string } };

const getbrandItemList = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URI}/con-items/?conCategory2Id=${id}`,
    { next: { revalidate: 86400 } }
  );
  const data = await res.json();
  return data;
};

const getBrandInfo = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URI}/con-category2s/${id}`,
    { next: { revalidate: 86400 } }
  );
  const data = await res.json();
  return data;
};

export default async function ({ params: { id } }: Params) {
  const brandInfo = await getBrandInfo(id);
  const brandItemList = await getbrandItemList(id);

  return (
    <>
      <SEOHeader
        title={`${brandInfo.conCategory2.name}`}
        description={`${brandInfo.conCategory2.name}상품들을 만나보세요!`}
        imageUrl={`${brandInfo.conCategory2.imageUrl}`}
        siteUrl={`https://ncnc.vercel.app/itemlist`}
      />
      <Header title={brandInfo.conCategory2.name} />
      <ListContainer items={brandItemList} />
    </>
  );
}

const getItemListPath = (brandCategories: BrandItemListType[]) => {
  return brandCategories.map((category) => category.conCategory1.id);
};

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URI}/con-category1s`);
  const data = await res.json();

  const fetchPromises = data.conCategory1s.map(({ id }) =>
    fetch(`${process.env.NEXT_PUBLIC_URI}/con-category1s/${id}/nested`).then(
      (res) => res.json()
    )
  );
  const brandCategories = await Promise.all(fetchPromises);

  const pathNums = getItemListPath(brandCategories);
  return pathNums.map((num) => ({
    params: { id: num.toString() },
  }));
}
