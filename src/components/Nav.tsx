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

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/tags">
            <Icon name="tag"/>
          </Link>
        </li>
        <li>
          <Link to="/money">
            <Icon name="add"/>
          </Link>
        </li>
        <li>
          <Link to="/statistics">
            <Icon name="chart-pie"/>
          </Link>
        </li>
      </ul>
    </NavWrapper>
  );
}

export default Nav;