import React from "react";
import styled from "styled-components";

const WebRedesign = () => {
  return (
    <WebRedesignWrap>
      <h2>Web Redesign</h2>
      <div className="contents"></div>
      <div className="contents"></div>
    </WebRedesignWrap>
  );
};

export default WebRedesign;

const WebRedesignWrap = styled.div`
  margin-top: 70px;
  margin-left: 100px;
  h2 {
    font-size: 31.99px;
    font-weight: bold;
  }
  .contents {
    margin-top: 50px;
    width: 455px;
    height: 425px;
    background-color: gray;
    border-radius: 20px;
  }
`;
