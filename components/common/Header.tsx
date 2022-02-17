import React from "react";
import styled from "styled-components";
import { useRouter } from "next/dist/client/router";
import MenuIcon from "components/icons/memuIcon";
import BackIcon from "components/icons/backIcon";

interface IProps {
  title: string;
  icon?: string;
}

const Header = ({ title, icon }: IProps) => {
  const router = useRouter();

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

      <HeaderTitle className="header">{title}</HeaderTitle>
      <MenuButton></MenuButton>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 627px;
  height: 4rem;
  background-color: white;
  border-bottom: 1px solid #eee;
  z-index: 5;
`;

const MenuButton = styled.button`
  margin-left: 40px;
`;

const HeaderTitle = styled.div`
  font-weight: 600;
`;

export default Header;
