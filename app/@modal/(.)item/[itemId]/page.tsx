import ItemContainer from "components/Item/ItemContainer";
import Modal from "components/common/Modal";
import React from "react";

type Params = { params: { itemId: string } };

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
    <Modal>
      <ItemContainer item={itemInfo}></ItemContainer>
    </Modal>
  );
}
