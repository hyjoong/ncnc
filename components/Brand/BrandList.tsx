import React from "react";
import GridLayout from "components/Layout/GridLayout";
import CategoryItem from "components/common/CategoryItem";
import { BrandType } from "types";

interface IProps {
  brands: BrandType[];
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
