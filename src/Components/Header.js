import React from "react";
import { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Header() {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" />
      </a>
      <Menu>
        <p>
          <a href="#">Model S</a>
        </p>
        <p>
          <a href="#">Model X</a>
        </p>
        <p>
          <a href="#">Model Y</a>
        </p>
        <p>
          <a href="#">Model 3</a>
        </p>
      </Menu>
      <RightMenu>
        <p>
          <a href="#">Shop </a>
        </p>
        <p>
          <a href="#">Tesla Account</a>
        </p>
        <MenuWrap>
          <MenuIcon onClick={() => setmenuOpen(!menuOpen)} />
        </MenuWrap>
      </RightMenu>
      <BurgerMenu show={menuOpen}>
        <CustomClose onClick={() => setmenuOpen(!menuOpen)}>
          <CloseIcon />
        </CustomClose>
        <li>
          <a>Existing Inventory</a>
        </li>
        <li>
          <a>Used Inventory</a>
        </li>
        <li>
          <a>Trade-in</a>
        </li>
        <li>
          <a>Test Drive</a>
        </li>
        <li>
          <a>Cybertruck</a>
        </li>
        <li>
          <a>Roadster</a>
        </li>
      </BurgerMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  padding: 20px;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  text-transform: uppercase;
  font-weight: 800;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-left: 11rem;
  p {
    padding: 0 10px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  text-transform: uppercase;
  align-items: center;

  padding: 0 10px;
  font-weight: 800;
  p {
    padding: 0 10px;
  }
  @media (max-width: 768px) {
    margin-left: 12.5rem;
  }
`;
const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  transform: ${ props => props.show ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.2s;
  text-align: start;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 800;
  }
`;
const CustomClose = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor:pointer;
`;
