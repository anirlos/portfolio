import React from "react";
import styled from "styled-components";

const ProjectPage = () => {
  return (
    <WebRedesignWrap>
      <h2>Project</h2>
      <ProjectContents>
        <div className="contents"></div>
        <div className="contents"></div>
        <div className="contents"></div>
        <div className="contents"></div>
        <div className="contents"></div>
      </ProjectContents>
    </WebRedesignWrap>
  );
};

export default ProjectPage;

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

const ProjectContents = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: nowrap;
  overflow-x: auto;
  .contents {
    flex: 0 0 auto;
  }
`;
