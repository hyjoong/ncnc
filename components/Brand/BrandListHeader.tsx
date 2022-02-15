import React from "react";
import GridLayout from "components/Layout/GridLayout";
import CategoryItem from "components/common/CategoryItem";

const BrandListHeader = ({ brands }: any) => {
  return (
    <div>
      <GridLayout>
        {brands.map((item, index) => (
          <CategoryItem
            key={index}
            thumbnail={item.imageUrl}
            name={item.name}
            id={item.id}
          />
        ))}
      </GridLayout>
    </div>
  );
};

export default BrandListHeader;
