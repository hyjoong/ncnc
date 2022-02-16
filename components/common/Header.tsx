import React from "react";
import styled from "styled-components";
import { useRouter } from "next/dist/client/router";
import MenuIcon from "components/icons/memuIcon";
import BackIcon from "components/icons/backIcon";

interface IProps {
  title: string;
  icon?: string;
}

const Header = ({ title, icon }: any) => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <HeaderWrapper>
      {icon === "menu" ? (
        <MenuButton>
          <MenuIcon />
        </MenuButton>
      ) : (
        <MenuButton onClick={() => router.back()}>
          <BackIcon />
        </MenuButton>
      )}

      <HeaderTitle>{title}</HeaderTitle>
      <MenuButton></MenuButton>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: white;
`;

const MenuButton = styled.button`
  margin-left: 40px;
`;

const HeaderLeft = styled.button`
  font-weight: 600;
`;

const HeaderTitle = styled.div`
  font-weight: 600;
`;

const HeaderRight = styled.div``;

export default Header;
