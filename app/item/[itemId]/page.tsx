import React from "react";
import SEOHeader from "hooks/SEOHeader";
import Header from "components/common/Header";
import ItemContainer from "components/Item/ItemContainer";

type Params = { params: { itemId: string } };

const getItemData = async (itemId: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URI}/con-items//${itemId}`
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
