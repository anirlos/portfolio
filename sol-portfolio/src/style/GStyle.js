import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    margin: 0;
    padding: 0;
    font-family: "Noto Sans KR", sans-serif;
    color: #000;
    background: linear-gradient(#e8eced, #d3e6ea);

  
  }

  a {
    text-decoration: none;
    outline: none;
    color: #000;
  
  }

  a:visited, a:active{color: #000}
  html{
  scroll-behavior: smooth;
}

li {
  list-style-type: none;
}



:root{--swiper-theme-color: #000000;}
`;
