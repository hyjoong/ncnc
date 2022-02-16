import React from "react";
import ListItem from "components/itemList/listItem";
import FlexLayout from "components/Layout/FlexLayout";
import ItemDetail from "./ItemDetail";
import { DetailType } from "types/detail";

interface IProps {
  item: DetailType;
}

const ItemContainer = ({ item }: IProps) => {
  return (
    <FlexLayout>
      <ListItem id={item.id} item={item} type="detail" />
      <ItemDetail item={item} />
    </FlexLayout>
  );
};

export default ItemContainer;
