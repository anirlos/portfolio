import React, { useState, useRef } from "react";
import styled from "styled-components";
import 날씨어때 from "../../assets/projectsPng/플젝날어.png";
import 베이크팡 from "../../assets/projectsPng/Group 17플젝베팡.png";
import 유뮤직 from "../../assets/projectsPng/유뮤직.png";
import 주사위게임 from "../../assets/projectsPng/주사위게임.png";
import 워들게임 from "../../assets/projectsPng/워들게임.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectPage = () => {
  // const [modalOpen, setModalOpen] = useState(false);
  // const modalBackground = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <WebRedesignWrap>
      <h2>Project</h2>
      <ProjectContents>
        <Slider {...settings}>
          <div className="contents">
            <img src={날씨어때} />
          </div>
          {/* <div className="modal-open-btn" onClick={() => setModalOpen(true)}>
            {modalOpen && (
              <div
                className={"modal-container"}
                ref={modalBackground}
                onClick={(e) => {
                  if (e.target === modalBackground.current) {
                    setModalOpen(false);
                  }
                }}
              >
                <div className={"modal-content"}>
                  <h2>하솔리나 | Portfolio</h2>
                  <p>
                    <span>birth</span>: 1999.01.15
                  </p>
                  <hr />
                  <h3>Career</h3>

                  <div>
                    <p>오즈코딩스쿨</p>
                    <p>2024.02.26~</p>
                    <p>프론트엔드 2기 교육조교</p>
                  </div>
                  <div>
                    <p>양업토마스장애인종합복지관</p>
                    <p>2022.04.01~2023.4.30</p>
                    <p>교육문화프로그램 기획 및 운영</p>
                  </div>

                  <hr />
                  <div>
                    <p>학력</p>
                    <p>2022년 졸업</p>
                    <p>한림대학교 사회복지학과(4년)</p>
                  </div>
                  <hr />
                  <h3>Activity</h3>
                  <div className="activity">
                    <div>
                      슈퍼코딩 부트 캠프 2기 FE <br />
                      2023.7.30 ~ 2023.12.22
                    </div>
                    <div>
                      - 웹 개발 기초 강의 (FB, BE) <br />- 프론트엔드 웹 개발
                      강의 <br />- 3차 팀프로젝트 진행 <br />- 클론코딩 및 개인
                      프로젝트 진행
                    </div>
                    <div>
                      코드잇
                      <br />
                      2023.04 ~ 2023.07
                    </div>
                    <div>
                      - HTML, CSS 핵심 개념 (FB, BE) <br />- 리액트 웹 개발
                      시작하기 <br />- 인터랙티브 자바스크립트 <br />- 반응형 웹
                      퍼블리싱
                    </div>
                  </div>

                  <button
                    className={"modal-close-btn"}
                    onClick={() => setModalOpen(false)}
                  >
                    모달 닫기
                  </button>
                </div>
              </div>
            )}
          </div> */}
          <div className="contents">
            {" "}
            <img src={베이크팡} />
          </div>
          <div className="contents">
            <img src={유뮤직} />
          </div>
          <div className="contents">
            <img src={주사위게임} />
          </div>
          <div className="contents">
            <img src={워들게임} />
          </div>
        </Slider>
      </ProjectContents>
    </WebRedesignWrap>
  );
};

export default ProjectPage;

const WebRedesignWrap = styled.div`
  .slick-slider {
    width: 90%;
  }
  .slick-slide {
    height: 700px;
  }
  margin-top: 30px;
  margin-left: 100px;
  h2 {
    font-size: 31.99px;
    font-weight: bold;
  }
  .contents {
    margin-top: 30px;
    width: 455px;
    height: 425px;
    /* background-color: gray; */
    border-radius: 20px;
  }
  .modal-container {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 12%;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.7);
  }

  .modal-content {
    background-color: #ffffff;
    width: 550px;
    height: 650px;
    padding: 15px;
    h2 {
      margin-bottom: 20px;
    }
  }
`;

const ProjectContents = styled.div`
  /* display: flex;
  gap: 10px;
  flex-wrap: nowrap; */
  /* overflow-x: auto; */
  .contents {
    /* flex: 0 0 auto; */
  }
  text-align: center;
  img {
    width: 100%;
    margin-top: 0;
  }
`;
