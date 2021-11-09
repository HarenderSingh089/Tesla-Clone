import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import BurgerNavRow from './BurgerNavRow'
import { Close } from "@mui/icons-material";
import { useState } from "react";

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y </a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={()=>setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
          <Closewrap>
            <CustomClose onClick={()=>setBurgerStatus(false)}/>
            </Closewrap>
            <BurgerNavRow text="Model S"/>
            <BurgerNavRow text="Model 3"/>
            <BurgerNavRow text="Model X"/>
            <BurgerNavRow text="Model Y"/>
            <BurgerNavRow text="Existing Inventory "/>
            <BurgerNavRow text="Used Inventory "/>
            <BurgerNavRow text="Trade-in"/>
            <BurgerNavRow text="Cybertruck"/>
            <BurgerNavRow text="Roadster"/>
            <BurgerNavRow text="Semi"/>
            <BurgerNavRow text="Charging"/>
            <BurgerNavRow text="Power"/>
            <BurgerNavRow text="Commercial"/>
            <BurgerNavRow text="Utilities"/>
            <BurgerNavRow text="Test Drive"/>
            {/* <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-in</a></li>
            <li><a href="#">CyberTruck</a></li>
            <li><a href="#">Roadster</a></li>
            <li><a href="#">Roadster</a></li>
            <li><a href="#">Roadster</a></li>
            <li><a href="#">Roadster</a></li>
            <li><a href="#">Roadster</a></li> */}
        </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  position: fixed;
  min-height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  z-index:100;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;   
    }
    @media (max-width:768px) {
        a{
            display:none;
        }
    }
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`
const BurgerNav = styled.div`
    position: fixed;
    top:0;
    bottom:0;
    right: 0;
    background-color:white;
    width: 300px;
    z-index:20;
    list-style:none;
    padding: 20px;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition : transform 0.2s;
    
    /* text-align:center; */
  
`
const CustomClose = styled(Close)`
   cursor: pointer;

`

const Closewrap = styled.div`
display: flex;
align-items: center;
justify-content:flex-end;
margin-top:-2px;
`