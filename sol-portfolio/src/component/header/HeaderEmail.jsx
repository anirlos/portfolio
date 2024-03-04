import React from "react";
import styled from "styled-components";

const HeaderEmail = () => {
  return (
    <div>
      <HeaderWrap>
        <TitleTxt>
          <h2>
            <span>HaSolrina</span> Portfolio
          </h2>
        </TitleTxt>
        <CategoryWrap>
          <p>anirlos161@naver.com</p>
        </CategoryWrap>
      </HeaderWrap>
    </div>
  );
};

export default HeaderEmail;

const HeaderWrap = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
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
