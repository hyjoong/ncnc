import React from "react";
import useBrandList from "hooks/useBrandList";
import GridLayout from "components/Layout/GridLayout";
import CategoryItem from "components/common/CategoryItem";

const BrandList = () => {
  const { results, loading, responseOK } = useBrandList();

  if (!results) {
    return <>Loading</>;
  }

  if (loading) {
    return <div>로딩중... </div>;
  }

  if (!loading && !responseOK) {
    return <div>Not Found</div>;
  }

  return (
    <GridLayout>
      {results.map((item, index) => (
        <CategoryItem key={index} thumbnail={item.imageUrl} name={item.name} />
      ))}
    </GridLayout>
  );
};

export default BrandList;
