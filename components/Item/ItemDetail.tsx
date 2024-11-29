import React, { useState, useRef } from "react";
import styled from "styled-components";
import OptionBox from "./optionBox";
import { DetailType } from "types/detail";

interface IProps {
  item: DetailType;
}

const ItemDetail = ({ item }: IProps) => {
  const [isMenu, setIsMenu] = useState<boolean>(false);

  const [selectOption, setSelectOption] = useState<string>("");
  const listRef = useRef<HTMLDivElement>(null);
  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <DetailContainer isMenu={isMenu}>
      <DetailContent>
        <DetailInfo>{item.conCategory2.info}</DetailInfo>
        <DetailInfo>{item.warning}</DetailInfo>
      </DetailContent>

      <OptionBox
        isMenu={isMenu}
        handleMenu={handleMenu}
        listRef={listRef}
        lists={item.options}
        discount={item.discountRate}
        selectOption={selectOption}
        setSelectOption={setSelectOption}
        setIsMenu={setIsMenu}
      />
    </DetailContainer>
  );
};

const DetailContainer = styled.div<{ isMenu: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-color: #ffffff;
  min-height: calc(100vh - 191px);
  max-height: calc(100vh - 191px);
  overflow: hidden;
`;

const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex-grow: 1;
  overflow-y: auto;
`;

const DetailInfo = styled.span`
  font-size: 14px;
  white-space: pre-wrap;
  line-height: 1.5;
  color: #999;
`;

export default ItemDetail;
