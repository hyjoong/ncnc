import React from "react";
import styled from "styled-components";
import useCategoryList from "hooks/useCategoryList";
import GridLayout from "components/Layout/GridLayout";
import CategoryItem from "components/common/CategoryItem";

const CategoryList = () => {
  const { results, loading, responseOK } = useCategoryList();

  if (!results) {
    return <>Loading</>;
  }

  if (loading) {
    return <div>로딩중... </div>;
  }

  if (!loading && !responseOK) {
    return <div>Not Found</div>;
  }

  console.log(results);
  return (
    <GridLayout>
      {results.map((item, index) => (
        <CategoryItem
          key={index}
          thumbnail={item.imageUrl}
          name={item.name}
        ></CategoryItem>
      ))}
    </GridLayout>
  );
};

const ItemImg = styled.img`
  width: 40px;
`;

const ItemName = styled.div`
  margin-top: 12px;
  font-size: 0.7rem;
  font-weight: 600;
`;

export default CategoryList;
