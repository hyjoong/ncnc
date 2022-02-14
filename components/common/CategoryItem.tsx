import React from "react";
import styled from "styled-components";

interface IProps {
  thumbnail: string;
  name: string;
}

const CategoryItem = ({ thumbnail, name }: IProps) => {
  return (
    <CategoryBox>
      <ItemImg src={thumbnail} />
      <ItemName>{name}</ItemName>
    </CategoryBox>
  );
};
const CategoryBox = styled.div`
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

export default CategoryItem;
