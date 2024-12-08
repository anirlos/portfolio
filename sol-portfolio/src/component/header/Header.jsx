import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrap>
      <TitleTxt>
        <h2>
          <span>HaSolrina</span> Portfolio
        </h2>
      </TitleTxt>
      <CategoryWrap>
        <li>
          <a href="#intro">INTRO</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        {/* <li>
          <a href="#webredesign">WEB REDESIGN</a>
        </li> */}
        <li>
          <a href="#project">PROJECT</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </CategoryWrap>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(133, 158, 113, 0.38);
`;

const CategoryWrap = styled.div`
  display: flex;
  gap: 22px;
  margin-top: 37px;
  margin-right: 35px;
  font-weight: 600;
`;

const TitleTxt = styled.div`
  margin-top: 28px;
  margin-left: 35px;
  h2 {
    font-size: 1.5rem;
  }
  span {
    font-weight: bold;
  }
`;
