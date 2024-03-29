"use client";
import React from "react";
import GridLayout from "components/Layout/GridLayout";
import CategoryItem from "components/common/CategoryItem";
import { CategoryData } from "types";

interface IProps {
  categories: CategoryData[];
}

const CategoryList = ({ categories }: IProps) => {
  return (
    <GridLayout>
      {categories.map((item, index) => (
        <CategoryItem
          key={index}
          thumbnail={item.imageUrl}
          id={item.id}
          name={item.name}
          type="brand"
        ></CategoryItem>
      ))}
    </GridLayout>
  );
};

export default CategoryList;
