import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Nav() {
  const StyledNav = styled.ul`
    width: 100%;
    display: flex;
    list-style-type: none;
  `;
  const LinkStyle = styled.li`
    color: white;
  `;

  return (
    <nav>
      <StyledNav>
        <LinkStyle>
          <Link to="/">Home</Link>
        </LinkStyle>
        <LinkStyle>
          <Link to="/season">Seasons</Link>
        </LinkStyle>
      </StyledNav>
    </nav>
  );
}

export default Nav;
