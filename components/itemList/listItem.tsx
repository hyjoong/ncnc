import React from "react";
import styled, { css } from "styled-components";
import { BrandItem } from "types";
import { useRouter } from "next/dist/client/router";

interface ItemProps {
  item: BrandItem;
  id: number;
  type: string;
}

interface IProps extends ItemProps {}

const ListItem = ({ item, type, id }: IProps) => {
  const HandlePage = () => {
    if (type !== "detail") {
      router.push(`/${type}/${id}`);
    } else {
      return;
    }
  };

  const router = useRouter();
  return (
    <CategoryBox onClick={HandlePage} type={type}>
      <ItemImg src={item.imageUrl} />
      <ItemContent>
        <ItemName>{item.name}</ItemName>
        <ItemPrice>
          <ItemDiscountRate>{item.discountRate}%</ItemDiscountRate>
          <ItemSalePrice>
            {item.minSellingPrice.toLocaleString()}원
          </ItemSalePrice>
          <ItemCost>{item.originalPrice.toLocaleString()}원</ItemCost>
        </ItemPrice>
      </ItemContent>
    </CategoryBox>
  );
};

const CategoryBox = styled.div<{ type: string }>`
  display: flex;
  border-radius: 5px;
  padding: 20px 30px;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  align-items: center;
  ${({ type }) =>
    type !== "detail" &&
    css`
      cursor: pointer;
    `}
`;
const ItemImg = styled.img`
  width: 70px;
  height: 70px;
`;

const ItemContent = styled.div`
  display: flex;
  height: 50px;
  padding: 0 20px;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemName = styled.div`
  margin-top: 12px;
  font-size: 0.7rem;
  font-weight: 600;
`;

const ItemPrice = styled.div`
  display: flex;
  align-items: center;
`;

const ItemDiscountRate = styled.div`
  color: #f75656;
  margin: 0 10px 0 0;
`;

const ItemSalePrice = styled.div`
  color: #333333;
  margin: 0 10px 0 0;
  font-weight: 600;
`;

const ItemCost = styled.span`
  text-decoration: line-through;
  color: #999999;
  font-size: 14px;
`;

export default ListItem;
