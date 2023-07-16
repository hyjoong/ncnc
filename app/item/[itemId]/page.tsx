import React from "react";
import type { Metadata } from "next";
import SEOHeader from "hooks/SEOHeader";
import Header from "components/common/Header";
import ItemContainer from "components/Item/ItemContainer";
type Params = { params: { itemId: string } };

export const generateMetadata = async ({
  params: itemId,
}: Params): Promise<Metadata> => {
  try {
    const itemInfo = await getItemData(Number(itemId));

    return {
      title: `ncnc | ${itemInfo.name}`,
      description: itemInfo.information,
      openGraph: {
        url: `https://ncnc.vercel.app`,
        title: `${itemInfo.title}`,
        siteName: "ncnc",
        description: itemInfo.information,
        images: [
          {
            url: `${itemInfo.imageUrl}`,
            width: 80,
            height: 80,
            alt: `product picture: ${itemInfo.title}`,
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

const getItemData = async (itemId: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URI}/con-items//${itemId}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.conItem;
};

export default async function ({ params: { itemId } }: Params) {
  const itemInfo = await getItemData(Number(itemId));

  return (
    <>
      <SEOHeader
        title={`${itemInfo.name}`}
        description={`${itemInfo.information}`}
        imageUrl={`${itemInfo.imageUrl}`}
        siteUrl={`https://ncnc.vercel.app/items/${itemInfo.itemId}}`}
      />
      <Header title="" />
      <ItemContainer item={itemInfo}></ItemContainer>
    </>
  );
}
