import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Option } from "types";
import { parseOptionData, parseOptionDataList } from "utils/parseData";

interface IProps {
  isMenu: boolean;
  onClick: () => void;
  lists: Option[];
}
const OptionBox = ({ isMenu, onClick, lists }: IProps) => {
  const optionList: Option[] = parseOptionDataList(lists);
  console.log(optionList);
  return (
    <>
      <OptionContainer>
        <OptionHeader isMenu={isMenu}>
          <OptionTitle>옵션 선택하기</OptionTitle>
          <ButtonCancel onClick={onClick}>X</ButtonCancel>
        </OptionHeader>
        <OptionList isMenu={isMenu}>
          <OptionWrapper>
            {optionList.map((item, index) => (
              <ListContainer>
                <ListContent>
                  <ListComponent>
                    <span className="title">유효기간:</span>
                    <span>{item.expireAt} 까지</span>
                  </ListComponent>
                  <ListComponent>
                    <span className="title">할인가:</span>
                    <span> {item.sellingPrice.toLocaleString()}원</span>
                  </ListComponent>
                </ListContent>
                <ListRate>{item.sellingPrice}%</ListRate>
              </ListContainer>
            ))}
          </OptionWrapper>
        </OptionList>
        <ButtonBuy isMenu={isMenu} onClick={onClick}>
          {isMenu ? "구매하기" : "옵션 선택하기"}
        </ButtonBuy>
      </OptionContainer>
    </>
  );
};

const OptionContainer = styled.div`
  height: 100%;
  color: #ffffff;
`;

const OptionHeader = styled.div<{ isMenu: boolean }>`
  position: fixed;
  width: 627px;
  bottom: 306px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eee;
  ${({ isMenu }) =>
    isMenu &&
    css`
      display: none;
    `}
`;

const OptionTitle = styled.span`
  margin-left: 20px;
  font-size: 14px;
  color: #000;
`;

const ButtonCancel = styled.button`
  margin-right: 20px;
`;

const OptionList = styled.div<{ isMenu: boolean }>`
  position: fixed;
  width: 627px;
  bottom: 50px;
  background-color: #ffffff;
  ${({ isMenu }) =>
    isMenu &&
    css`
      display: none;
    `}
`;

const OptionWrapper = styled.div`
  width: 100%;
  min-height: 256px;
  max-height: 256px;
  overflow-y: auto;
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #000;
  padding: 10px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const ListContent = styled.div``;

const ListComponent = styled.div`
  display: flex;
  & .title {
    width: 70px;
    font-size: 12px;
    color: #999;
  }
`;

const ListRate = styled.span`
  display: flex;
  align-items: center;
  font-size: 17px;
  color: rgb(247, 86, 86);
  padding-right: 19px;
`;

const ButtonBuy = styled.button<{ isMenu: boolean }>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 627px;
  bottom: 0;
  height: 50px;
  ${({ isMenu }) =>
    isMenu
      ? css`
          background-color: #ccc;
        `
      : css`
          background-color: #ff5757;
        `}
`;

export default OptionBox;
