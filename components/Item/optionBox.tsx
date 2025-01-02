import React from "react";
import styled, { css } from "styled-components";
import { Option } from "types";
import { parseOptionDataList, parseDate } from "utils/parseData";

interface IProps {
  isMenu: boolean;
  handleMenu: () => void;
  lists: Option[];
  discount: number;
  listRef: React.RefObject<HTMLDivElement | null>;
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
    if (isMenu && !selectOption) {
      return;
    }
    if (!isMenu && selectOption) {
      alert("구매 완료");
      setIsMenu(false);
      return;
    }
    handleMenu();
  };

  return (
    <div className="optionBox">
      {isMenu && (
        <OptionList ref={listRef}>
          <OptionWrapper>
            {optionList.map((item, index) => (
              <ListContainer
                className="listContainer"
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
      )}
      {selectOption && (
        <SelectOptionContainer onClick={handleMenu}>
          <SelectBox>{selectOption}</SelectBox>
        </SelectOptionContainer>
      )}
      <ButtonBuy className="buttonBuy" isMenu={isMenu} onClick={handleBuy}>
        {isMenu ? "구매하기" : selectOption ? "구매하기" : "옵션 선택하기"}
      </ButtonBuy>
    </div>
  );
};

const OptionList = styled.div``;

const OptionWrapper = styled.div`
  width: 100%;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  height: 150px;
  overflow-y: auto;
`;

const ListContainer = styled.div<{ index: number }>`
  display: flex;
  justify-content: space-between;
  color: #000;
  padding: 3px 20px;

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
  background-color: #ffffff;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  bottom: 50px;
  height: 68px;
`;

const SelectBox = styled.div`
  padding: 12px 20px;
  margin: 10px 25px;
  font-size: 15px;
  border-radius: 5px;
  background-color: #ebeced;
`;

const ButtonBuy = styled.button<{ isMenu: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  transition: all 0.15s ease-in-out;
  color: #fff;
  font-size: 17px;
  font-weight: 600;
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
