import React from "react";
import styled from "styled-components";
import useCategoryList from "hooks/useCategoryList";

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
    <CategoryWrapper>
      {results.map((item, index) => (
        <CategoryItem key={index}>
          <ItemImg src={item.imageUrl} />
          <ItemName>{item.name}</ItemName>
        </CategoryItem>
      ))}
    </CategoryWrapper>
  );
};

const CategoryWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 2px;
  column-gap: 2px;
  margin: 2rem;
  border: 1px solid black;
`;

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
