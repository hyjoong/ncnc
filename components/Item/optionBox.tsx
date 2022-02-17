import React from "react";
import styled, { css } from "styled-components";
import { Option } from "types";
import { parseOptionDataList, parseDate } from "utils/parseData";

interface IProps {
  isMenu: boolean;
  handleMenu: () => void;
  lists: Option[];
  discount: number;
  listRef: React.RefObject<HTMLDivElement>;
  selectOption: string;
  setIsMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectOption: React.Dispatch<React.SetStateAction<string>>;
}
const OptionBox = ({
  isMenu,
  handleMenu,
  lists,
  discount,
  listRef,
  selectOption,
  setIsMenu,
  setSelectOption,
}: IProps) => {
  const optionList: Option[] = parseOptionDataList(lists);
  console.log(optionList);

  const handleItem = (item: Option) => {
    const option =
      parseDate(item.expireAt) +
      " 까지 / " +
      item.sellingPrice.toLocaleString() +
      "원";
    setSelectOption(option);
    handleMenu();
  };

  const handleBuy = () => {
    if (!isMenu) {
      if (selectOption) {
        alert("구매 완료");
        setIsMenu(false);
        return;
      }
    }
    handleMenu();
  };

  return (
    <>
      <OptionList ref={listRef}>
        <OptionWrapper>
          {optionList.map((item, index) => (
            <ListContainer
              key={index}
              index={index}
              onClick={() => handleItem(item)}
            >
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
              <ListRate>{discount}%</ListRate>
            </ListContainer>
          ))}
        </OptionWrapper>
      </OptionList>
      {selectOption && (
        <SelectOptionContainer onClick={handleMenu}>
          <SelectBox>{selectOption}</SelectBox>
        </SelectOptionContainer>
      )}
      <ButtonBuy isMenu={isMenu} onClick={handleBuy}>
        {isMenu || selectOption ? "구매하기" : "옵션 선택하기"}
      </ButtonBuy>
    </>
  );
};

const OptionList = styled.div`
  max-height: 0;
  position: fixed;
  bottom: 50px;
  width: 627px;
  background-color: #ffffff;
  overflow: hidden;
  transition: max-height 0.3s ease;
  z-index: 5;
`;

const OptionWrapper = styled.div`
  width: 100%;
  min-height: 256px;
  max-height: 256px;
  overflow-y: auto;
`;

const ListContainer = styled.div<{ index: number }>`
  display: flex;
  justify-content: space-between;
  color: #000;
  padding: 10px 20px;
  ${({ index }) =>
    index === 0 &&
    css`
      border-top: 2px solid rgba(0, 0, 0, 0.1);
    `}

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const ListContent = styled.div``;

const ListComponent = styled.div`
  display: flex;
  margin: 5px 0;
  font-size: 14px;
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

const SelectOptionContainer = styled.div`
  position: fixed;
  width: 627px;
  background-color: #ffffff;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  bottom: 50px;
  height: 68px;
`;

const SelectBox = styled.div`
  padding: 12px 20px;
  margin: 15px 25px;
  font-size: 15px;
  border-radius: 5px;
  background-color: #ebeced;
`;

const ButtonBuy = styled.button<{ isMenu: boolean }>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 627px;
  bottom: 0;
  height: 50px;
  z-index: 2;
  color: #fff;
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
