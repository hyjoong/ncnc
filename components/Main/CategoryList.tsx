import React from "react";
import styled from "styled-components";
import useCategoryList from "hooks/useCategoryList";
import GridLayout from "components/Layout/GridLayout";

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
        <CategoryItem key={index}>
          <ItemImg src={item.imageUrl} />
          <ItemName>{item.name}</ItemName>
        </CategoryItem>
      ))}
    </GridLayout>
  );
};

const CategoryItem = styled.div`
  border-radius: 5px;
  background-color: white;
  height: 94px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ItemImg = styled.img`
  width: 40px;
`;

const ItemName = styled.div`
  margin-top: 12px;
  font-size: 0.7rem;
  font-weight: 600;
`;

export default CategoryList;
