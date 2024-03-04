import React from "react";
import Header from "../header/Header";
import styled from "styled-components";
import 소나무 from "../../assets/소나무4.png";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <IntroWrap>
      <Header />
      <Contents>
        <SubTitle>
          <motion.h2
            id="int"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <span>늘 푸른 소나무처럼 꾸준하게</span>
            <span className="line"></span>
            <motion.span
              id="title"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 2,
                ease: [0, 0.71, 0.3, 1.01],
              }}
            >
              늘, 솔
            </motion.span>
          </motion.h2>
        </SubTitle>

        <h1>
          Always, <span>Sol</span>
        </h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          웹퍼블리셔 & 프론트엔드 개발자 하솔리나입니다.
        </motion.p>
      </Contents>
      <motion.div
        class="img-wrapper"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <img src={소나무} />
      </motion.div>
    </IntroWrap>
  );
};

export default Intro;

const IntroWrap = styled.div`
  background: linear-gradient(#e8eced, #d3e6ea);
  .img-wrapper {
    position: relative;
    width: 100vw;
    height: 42vh;
    padding-top: 30px;
  }
  .img-wrapper img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0;
    /* transform: translate(50, 50);
    height: 100%;
    object-fit: cover;
     */
  }
`;

const SubTitle = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  #int span:nth-child(1) {
    font-size: 22.6px;
    font-weight: 200;
  }

  #int span:nth-child(2) {
    position: relative;
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 10px;
  }
  #int span:nth-child(2)::after {
    display: block;
    position: absolute;
    left: 0;
    top: 10px;
    content: "";
    width: 460px;
    height: 1px;
    background-color: #8f908f;
  }
  #int span:nth-child(3) {
    margin-left: 450px;
    font-size: 36px;
    font-weight: 600;
  }
`;

const Contents = styled.div`
  color: #0d2721;
  width: 1000px;
  margin: 0 auto;
  margin-top: 130px;

  h1 {
    font-size: 170px;
    font-weight: 300;
    padding-left: 50px;
    span {
      font-weight: 700;
    }
  }
  p {
    font-size: 22.6px;
    text-align: right;
    padding-top: 50px;
    padding-right: 80px;
  }
`;
