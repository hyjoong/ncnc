import React from "react";
import useBrandList from "hooks/useBrandList";
import GridLayout from "components/Layout/GridLayout";
import CategoryItem from "components/common/CategoryItem";
import { CategoryData } from "types";

interface IProps {
  brands: CategoryData[];
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
        />
      ))}
    </GridLayout>
  );
};

export default BrandList;
