import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

export const theme = {
  font: {
    title: "Titillium Web, sans-serif",
    text: "Roboto, sans-serif",
    display: "Bungee Shade, cursive",
  },
  colors: {
    uncannyBlue: "#3F51B5",
    uncannyCyan: "cyan",
    uncannyOrange: "#ED6A5A",
    uncannyPlatinum: "#E9E3E6",
    uncannyYellow: "#FFBC0A",
    uncannyTurquoise: "#50C5B7",
    uncannyPurple: "#7c4dff",
  },
  mobile: "520px",
  tablet: "768px",
}

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.text}
  }
  body {
    line-height: 1.5;
    letter-spacing: 0;
    height:auto;
    background-color: #3f51b5;
    position: relative;
    min-height: 100vh;
  }
  h1{
    font-family: ${({ theme }) => theme.font.display};
    font-size: 5rem;
    color: white;
  }
  h2{
    font-family: ${({ theme }) => theme.font.title};
    font-size: 2rem;
    color: #2c26ff;
  }
  a {
    text-decoration: none ;
    color:black;
    font-family: ${({ theme }) => theme.font.title};
 }  
`
