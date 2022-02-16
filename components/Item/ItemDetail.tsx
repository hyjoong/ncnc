import React, { useState } from "react";
import styled, { css } from "styled-components";
import OptionBox from "./optionBox";
import { DetailType } from "types/detail";

interface IProps {
  item: DetailType;
}

const ItemDetail = ({ item }: IProps) => {
  console.log("hi 유의", item);
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [isSelect, setIsSelect] = useState<boolean>(false);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };
  return (
    <DetailContainer isMenu={isMenu}>
      <DetailTitle>브랜드 별 유의사항</DetailTitle>
      <DetailInfo>{item.conCategory2.info}</DetailInfo>
      <DetailInfo>{item.warning}</DetailInfo>
      <OptionBox isMenu={isMenu} onClick={handleMenu} />
    </DetailContainer>
  );
};

const DetailContainer = styled.div<{ isMenu: boolean }>`
  padding: 20px;
  display: flex;
  flex-direction: column;
  ${({ isMenu }) =>
    isMenu
      ? css`
          background-color: rgba(0, 0, 0, 0.4);
        `
      : css`
          background-color: #ffffff;
        `}
`;

const DetailTitle = styled.span`
  margin: 10px 0;
`;

const DetailInfo = styled.span`
  font-size: 14px;
  white-space: pre-wrap;
  line-height: 1.5;
  color: #999;
  margin-bottom: 2rem;
`;

export default ItemDetail;
