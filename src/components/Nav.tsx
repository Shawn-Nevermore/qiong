import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
import Icon from "./Icon";

const NavWrapper = styled.div`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > li {
      flex: auto;
      display: flex;
      padding: 1rem;
      justify-content: center;
      align-items: center;
      //background-color: #409EFF;
      &:hover {
        //background-color: rgb(102,177,255);
      }
    }
  }
`

const links = [
  ['/tags', 'tag'],
  ['/money', 'add'],
  ['/statistics', 'chart-pie']
];
const renderLinks = links.map(item =>
  <li>
    <Link to={item[0]}>
      <Icon name={item[1]}/>
    </Link>
  </li>
);

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        {renderLinks}
      </ul>
    </NavWrapper>
  );
}

export default Nav;