import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <Wrapper>
        <Menu>
          <MenuItem to="/">HOME</MenuItem>
        </Menu>
        <Menu>
          <MenuItem to="/chem">Chemistry</MenuItem>
          <MenuItem to="/phy">Physics</MenuItem>
          <MenuItem to="/bio">Biology</MenuItem>
          <MenuItem to="/ev">Evaluation</MenuItem>
          <MenuItem to="/apa">APA</MenuItem>
        </Menu>
      </Wrapper>
    </Nav>
  );
};

const Nav = styled.nav`
  background: rgb(70, 70, 70);
  background: linear-gradient(180deg, #282828 0%, rgba(255, 249, 224, 0) 100%);
  position: fixed;
  width: 100%;
  font-family: "Rubik";
  font-weight: bold;
  z-index: 2;
  font-size: 15px;
  height: 100px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  max-width: 80%;
  margin-inline: auto;
`;
const Menu = styled.div`
  align-self: center;
  padding: 0;
  /* position: relative; */
  display: flex;
  justify-content: space-between;
`;
const MenuItem = styled(Link)`
  color: white;
  position: relative;
  padding: 2%;
  font-size: 3vh;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  letter-spacing: 1;
  &:active {
    letter-spacing: 2;
  }
  &::after {
    content: "";
    position: absolute;
    width: 0px;
    height: 5px;
    left: 50%;
    bottom: 0;
    background-color: white;
    transition: all ease-in-out 0.2s;
  }
  &:hover::after {
    width: 100%;
    left: 0;
  }
  &::before {
    content: "";
    position: absolute;
    width: 0px;
    height: 5px;
    left: 50%;
    top: 0;
    background-color: white;
    transition: all ease-in-out 0.2s;
  }
  &:hover::before {
    width: 100%;
    left: 0;
  }
`;
const Brand = styled(Link)`
  align-self: center;
  text-decoration: none;
`;

export default Navbar;
