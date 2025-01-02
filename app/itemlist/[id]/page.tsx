import React from "react";
import { Metadata } from "next";
import ListContainer from "components/itemList/listContainer";
import Header from "components/common/Header";
import { Brand, BrandItemListType } from "types";

type Params = Promise<{ id: string }>;

const getbrandItemList = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URI}/con-items/?conCategory2Id=${id}`,
    {
      cache: "force-cache",
      next: { revalidate: 86400, tags: ["itemList-items"] },
    },
  );
  const data = await res.json();
  return data;
};

const getBrandInfo = async (id: string): Promise<Brand> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URI}/con-category2s/${id}`,
    { next: { revalidate: 86400, tags: ["itemList-brand"] } },
  );
  const data = await res.json();
  return data;
};

export const generateMetadata = async ({
  params,
}: {
  params: Params;
}): Promise<Metadata> => {
  const { id } = await params;

  try {
    const brandInfo = await getBrandInfo(id);

    return {
      title: `ncnc | ${brandInfo.conCategory2.name}`,
      description: `${brandInfo.conCategory2.name}상품들을 둘러보세요`,
      openGraph: {
        url: `https://ncnc.vercel.app/itemlist/${id}`,
        title: brandInfo.conCategory2.name,
        siteName: "ncnc",
        description: brandInfo.conCategory2.name,
        images: [
          {
            url: brandInfo.conCategory2.imageUrl,
            width: 80,
            height: 80,
            alt: `${brandInfo.conCategory2.name}`,
            type: "image/png",
          },
        ],
      },
    };
  } catch (e) {
    return {
      title: "ncnc | Not found",
      description: "The resource you were looking for does not exist",
    };
  }
};

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;

  const brandInfo = await getBrandInfo(id);
  const brandItemList = await getbrandItemList(id);
  return (
    <>
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
      (res) => res.json(),
    ),
  );
  const brandCategories = await Promise.all(fetchPromises);

  const pathNums = getItemListPath(brandCategories);
  return pathNums.map((num) => ({
    params: { id: num.toString() },
  }));
}
