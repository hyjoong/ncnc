import React from "react";
import styled from "styled-components";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

interface IProps {
  thumbnail: string;
  id: number;
  name: string;
}

const CategoryItem = ({ thumbnail, id, name }: IProps) => {
  const router = useRouter();
  const handlePage = (id: number) => {
    router.push(`/brand/${id}`);
  };
  return (
    <CategoryBox onClick={() => handlePage(id)}>
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
  cursor: pointer;
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
