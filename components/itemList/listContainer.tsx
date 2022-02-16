import React from "react";
import FlexLayout from "components/Layout/FlexLayout";
import ListItem from "./listItem";
import { BrandItem } from "types";

interface IProps {
  items: BrandItem[];
}

const ListContainer = ({ items }: IProps) => {
  console.log(items);
  return (
    <FlexLayout>
      {items?.map((item, index) => (
        <ListItem key={index} item={item} id={item.id} type="items" />
      ))}
    </FlexLayout>
  );
};

export default ListContainer;
