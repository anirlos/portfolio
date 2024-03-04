import logo from "./logo.svg";
import "./App.css";
import { SectionsContainer, Section } from "react-fullpage";
import Intro from "./component/intro/Intro";
import Header from "./component/header/Header";
import About from "./component/about/About";
import HeaderEmail from "./component/header/HeaderEmail";
import WebRedesign from "./component/webredesign/WebRedesign";
import ProjectPage from "./component/projectpage/ProjectPage";
import Contact from "./component/contact/Contact";

function App() {
  let options = {
    anchors: ["intro", "about", "project", "contact"],
  };
  return (
    <div className="App">
      <SectionsContainer {...options}>
        <Section>
          <Intro />
        </Section>

        <Section>
          <HeaderEmail />
          <About />
        </Section>

        {/* <Section>
          <HeaderEmail />
          <WebRedesign />
        </Section> */}

        <Section>
          <HeaderEmail />
          <ProjectPage />
        </Section>

        <Section>
          <HeaderEmail />
          <Contact />
        </Section>
      </SectionsContainer>
    </div>
  );
}

export default App;
