import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import User from "../data/user.json";

export const Header = () => {
  return (
    <HeaderBox>
      <Main>
        <Logo alt="logo" src="images/logo.png" />
        <Nav>
          <NavLink className="nav-item" to="/hold">
            대회개최
          </NavLink>
          <NavLink className="nav-item" to="/list">
            대회목록
          </NavLink>
          <NavLink className="nav-item" to="/">
            문제목록
          </NavLink>
        </Nav>
        <Search />
        <Image alt="profile" src="images/profile.png" />
        {User.name}님
      </Main>
    </HeaderBox>
  );
};

const HeaderBox = styled.header`
  display: flex;
  width: 100%;
  height: 3.5rem;
  justify-content: center;
  align-items: center;
  background-color: #2a2a2c;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 100%;
`;

const Logo = styled.img`
  height: 28px;
`;

const Image = styled.img`
  margin-left: 10%;
  margin-right: 0.2%;
  height: 42px;
`;

const Search = styled.input`
  height: 30px;
  padding-left: 13px;
  border: 1px solid white;
  background-color: #414143;
  width: 40%;
  border-radius: 15px;
  margin-left: 4%;
  background-image: url(images/search.png);
  background-repeat: no-repeat;
  background-size: 18px;
  background-position-x: 97%;
  background-position-y: 5px;
  &:focus {
    border: 2px solid white;
  }
`;

const Nav = styled.div`
  margin-left: 3%;
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: space-between;
`;
