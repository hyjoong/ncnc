import React from "react";
import { ProductItem } from "types";
import ListItem from "components/itemList/listItem";
import FlexLayout from "components/Layout/FlexLayout";
import ItemDetail from "./ItemDetail";

interface IProps {
  item: ProductItem;
}

const ItemContainer = ({ item }: IProps) => {
  console.log(item);
  return (
    <FlexLayout>
      <ListItem id={item.id} item={item} type="detail" />
      <ItemDetail item={item} />
    </FlexLayout>
  );
};

export default ItemContainer;
