import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <ContactWrap>
      <h2>Contact</h2>
      <h1>anirlos161@naver.com</h1>
      <div className="email">메일 보내기</div>
      <p>
        역량과 경험을 갖춘 꾸준히 성실한 웹 퍼블리셔&프론트엔드를 찾고 계시다면,
        언제든지 연락주세요!
        <br />
        협업 및 합류 제안 환영합니다 :-&#41;
        <br />
        <br />
        혹은 그 외의 나누고 싶은 궁금한 얘기가 있으시다면 편하게 연락 주세요!
      </p>
    </ContactWrap>
  );
};

export default Contact;

const ContactWrap = styled.div`
  margin-top: 70px;
  margin-left: 100px;
  .email {
    margin: 50px;
    font-size: 22.6px;
  }
  h2 {
    font-size: 31.99px;
    font-weight: bold;
  }
  h1 {
    margin-top: 100px;
    font-size: 63.9px;
    font-weight: bold;
  }

  p {
    font-size: 22.6px;
    line-height: 30px;
    font-weight: bold;
  }
`;
