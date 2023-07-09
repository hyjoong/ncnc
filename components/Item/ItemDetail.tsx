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
    if (!listRef || !listRef.current) {
      return;
    }
    const style = listRef.current.style;
    if (isMenu) {
      style.maxHeight = "0";
    } else if (!isMenu) {
      style.maxHeight = `${listRef.current.scrollHeight}px`;
    }
    if (isMenu) {
      if (!selectOption) {
        setIsMenu(!isMenu);
        return;
      }
    }

    setIsMenu(!isMenu);
  };

  const onSetIsVisible = () => {
    setIsMenu(false);
    handleMenu();
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
      {isMenu && <BodyBlackStyle onClick={onSetIsVisible} />}
    </DetailContainer>
  );
};

const DetailContainer = styled.div<{ isMenu: boolean }>`
  display: flex;
  flex-direction: column;
  width: 627px;
  height: 100%;
  background-color: #ffffff;
  min-height: calc(100vh - 220px);
`;

const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const DetailInfo = styled.span`
  font-size: 14px;
  white-space: pre-wrap;
  line-height: 1.5;
  color: #999;
  margin-bottom: 2rem;
`;

export const BodyBlackStyle = styled.div`
  width: 627px;
  height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
`;

export default ItemDetail;
