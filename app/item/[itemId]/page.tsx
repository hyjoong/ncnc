import React from "react";
import { Metadata } from "next";
import Header from "components/common/Header";
import ItemContainer from "components/Item/ItemContainer";

type Params = Promise<{ itemId: string }>;

const getItemData = async (itemId: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URI}/con-items//${itemId}`,
    { cache: "no-store" },
  );
  const data = await res.json();
  return data.conItem;
};

export const generateMetadata = async ({
  params,
}: {
  params: Params;
}): Promise<Metadata> => {
  const { itemId } = await params;

  try {
    const itemInfo = await getItemData(Number(itemId));

    return {
      title: `ncnc | ${itemInfo.name}`,
      description: itemInfo.information,
      openGraph: {
        url: `https://ncnc.vercel.app/item/${itemId}`,
        title: `ncnc | ${itemInfo.name}`,
        siteName: "ncnc",
        description: itemInfo.information,
        images: [
          {
            url: `${itemInfo.imageUrl}`,
            width: 80,
            height: 80,
            alt: `product: ${itemInfo.name}`,
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
  const { itemId } = await params;
  const itemInfo = await getItemData(Number(itemId));

  return (
    <>
      <Header title="" />
      <ItemContainer item={itemInfo}></ItemContainer>
    </>
  );
}
