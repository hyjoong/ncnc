"use client";
import React from "react";
import FlexLayout from "components/Layout/FlexLayout";
import ListItem from "./listItem";
import { BrandType, SaleItem } from "types";

interface IProps {
  items: BrandType | SaleItem;
}

const ListContainer = ({ items }: IProps) => {
  return (
    <FlexLayout>
      {items?.conItems.map((item, index) => (
        <ListItem key={index} item={item} id={item.id} type="item" />
      ))}
    </FlexLayout>
  );
};

export default ListContainer;
