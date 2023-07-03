"use client";
import React from "react";
import GridLayout from "components/Layout/GridLayout";
import CategoryItem from "components/common/CategoryItem";
import { BrandListType } from "types";

interface IProps {
  brands: BrandListType["conCategory1"]["conCategory2s"];
}

const BrandList = ({ brands }: IProps) => {
  return (
    <GridLayout>
      {brands.map((item, index) => (
        <CategoryItem
          key={index}
          thumbnail={item.imageUrl}
          id={item.id}
          name={item.name}
          type="itemlist"
        />
      ))}
    </GridLayout>
  );
};

export default BrandList;
