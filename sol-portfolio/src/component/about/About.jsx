import React, { useState, useRef } from "react";
import sol from "../../assets/솔.png";
import styled from "styled-components";
import skills from "../../assets/skills";
import 블로그 from "../../assets/profilePng/블로그.png";
import 깃허브 from "../../assets/profilePng/github.png";

const About = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();
  return (
    <Wrapper>
      <AboutConteiner>
        <div className="proflie-wrap">
          <img src={sol} className="profile-img" />
          <FrofileBtn>
            <div className={"btn-wrapper"}>
              <button
                className={"modal-open-btn"}
                onClick={() => setModalOpen(true)}
              >
                Profile +
              </button>
            </div>
          </FrofileBtn>
        </div>
        <div className="profile-wrap">
          <AboutSolWrap>
            <h2>About Sol</h2>
            <p>
              안녕하세요. 웹퍼블리셔 & 프론트엔드 개발자 하솔리나입니다. <br />
              간결한 코드 위에 말끔한 UI와 다채로운 UX를 그려내는 것을 좋아해요.
              <br />
              Reac/JavaScript/TypeScript 등 프레임워크 환경에서 반응형, 웹
              접근성을 고려한 웹 페이지와 기능을 구현합니다.
              <br />
              맡은 프로젝트를 책임감 있고 성실하게 해내고, 다양한 직군과 함께
              만들어가는 협업을 하고자 합니다. <br />
            </p>
          </AboutSolWrap>

          <ContactWrap>
            <h2>Blog & Git</h2>
            <ContactBox>
              <a
                className="box"
                href="https://velog.io/@bami/React-React%EC%97%90%EC%84%9C-%EB%AA%A8%EB%8B%AC%EC%B0%BD-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0"
              >
                <img src={블로그} />
                <p className="click">click!</p>
              </a>
              <div className="box">
                <img src={깃허브} />
                <p className="click">click!</p>
              </div>
            </ContactBox>
          </ContactWrap>
          <SkillsWrap>
            <h2>Skills</h2>
            <SkillsBox>
              <div className="box">
                <img src={skills.피그마} />
                <p className="click">Figma!</p>
              </div>
              <div className="box">
                <img src={skills.리액트} />
                <p className="click">React!</p>
              </div>
              <div className="box">
                <img src={skills.자스} />
                <p className="click">
                  Java
                  <br />
                  Script
                </p>
              </div>
              <div className="box">
                <img src={skills.ts} />
                <p className="click">
                  Type
                  <br />
                  Script
                </p>
              </div>
              <div className="box">
                <img src={skills.git} />
                <p className="click">Git</p>
              </div>
              <div className="box">
                <img src={skills.css} />
                <p className="click">CSS</p>
              </div>
              <div className="box">
                <img src={skills.html} />
                <p className="click">HTML</p>
              </div>
              <div className="box">
                <img src={skills.postman} />
                <p className="click">Postman</p>
              </div>
            </SkillsBox>
          </SkillsWrap>
        </div>
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
                  Developing on AWS <br />
                  2024.4.5
                </div>
                <div>
                  - 엔드 투 엔드 클라우드 애플리케이션 구축 <br /> - AWS
                  Identity and Access Management&#40;IAM&#41; 권한 구성 <br />-
                  Amazon S3 및 Amazon DynamoDB 리소스에 대해 CRUD <br />-
                  애플리케이션에서 여러 프로그래밍 파트너를 사용하여 AWS 서버에
                  액세스 진행
                </div>
                <div>
                  슈퍼코딩 부트 캠프 2기 FE <br />
                  2023.7.30 ~ 2023.12.22
                </div>
                <div>
                  - 웹 개발 기초 강의 (FB, BE) <br />- 프론트엔드 웹 개발 강의{" "}
                  <br />- 3차 팀프로젝트 진행 <br />- 클론코딩 및 개인 프로젝트
                  진행
                </div>
                <div>
                  코드잇
                  <br />
                  2023.04 ~ 2023.07
                </div>
                <div>
                  - HTML, CSS 핵심 개념 (FB, BE) <br />- 리액트 웹 개발 시작하기{" "}
                  <br />- 인터랙티브 자바스크립트 <br />- 반응형 웹 퍼블리싱
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
      </AboutConteiner>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  margin-top: 80px;
  margin-left: 200px;
`;

const AboutConteiner = styled.div`
  display: flex;
  .modal-container {
    width: 100%;
    height: 100%;
    position: fixed;
    top: -10%;
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
  .profile-img {
    width: 400px;
    height: 504px;
    border-radius: 20px;
  }

  .profile-wrap {
    margin-left: 70px;
  }
  h2 {
    font-size: 31.99px;
    font-weight: bold;
  }
  .proflie-wrap {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const AboutSolWrap = styled.div`
  margin: 20px 0;
  p {
    margin-top: 17px;
    font-size: 18px;
    font-weight: 400;
    line-height: 40px;
  }
`;

const SkillsWrap = styled.div`
  margin: 40px 0;
`;

const SkillsBox = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    border-radius: 12px;
    background-color: #f8fcf9ac;
    text-align: center;
    position: relative;

    &:hover {
      background-color: #7facbd;
      transition: all 0.3s ease-in-out;
      img {
        opacity: 0.3;
        box-shadow: 0 10px 28px rgba(0, 0, 0, 0.25),
          0 2px 7px rgba(0, 0, 0, 0.22);
      }
      p {
        transition: all 0.3s ease-in-out;

        opacity: 1;
      }
    }

    p {
      color: #ffffff;
      font-size: 18px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      /* display: none; */
    }
  }
  img {
    width: 70%;
  }
`;

const ContactWrap = styled.div`
  margin: 20px 0;
  p {
    margin-top: 17px;
    font-size: 18px;
    font-weight: 400;
    line-height: 40px;
  }
  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    border-radius: 12px;
    background-color: #f8fcf9ac;
    text-align: center;
    position: relative;
    margin-top: 20px;

    &:hover {
      background-color: #97c8dc;
      transition: all 0.3s ease-in-out;
      img {
        opacity: 0.3;
      }
      p {
        transition: all 0.3s ease-in-out;

        opacity: 1;
      }
    }

    p {
      color: #ffffff;
      font-size: 18px;
      position: absolute;
      top: 25%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      /* display: none; */
    }
  }
  img {
    width: 70%;
  }
`;

const ContactBox = styled.div`
  display: flex;
  gap: 20px;
`;

const FrofileBtn = styled.div`
  button {
    border: 0;
    padding: 10px 20px;
    border-radius: 20px;
    background-color: #012414;
    font-size: 1.4rem;
    font-weight: 500;
    color: white;
  }
`;
