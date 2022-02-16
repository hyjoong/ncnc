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
      <DetailContent>
        <DetailTitle>브랜드 별 유의사항</DetailTitle>
        <DetailInfo>{item.conCategory2.info}</DetailInfo>
        <DetailInfo>{item.warning}</DetailInfo>
      </DetailContent>

      <OptionBox isMenu={isMenu} onClick={handleMenu} lists={item.options} />
    </DetailContainer>
  );
};

const DetailContainer = styled.div<{ isMenu: boolean }>`
  display: flex;
  flex-direction: column;
`;

const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
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
