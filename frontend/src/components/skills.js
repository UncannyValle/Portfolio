import { animated, useSpring, config } from "@react-spring/web"
import React from "react"
import styled from "styled-components"

const Wrapper = styled(animated.div)`
  padding: 2rem 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  border-radius: 15px;
  background-color: var(--black);
  .title {
    margin-bottom: 2rem;
  }
  .line {
    height: 5px;
    background-color: var(--pink);
    margin: 0 auto;
  }
  p {
    font-size: 1.2rem;
    text-align: center;
    padding: 1rem 0;
    display: inline-block;
  }

  @media (max-width: 768px) {
    width: 95%;
    margin: 0 auto;
    padding: 0;
    p {
      width: 70%;
      text-align: center;
    }
  }
`
const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`
const Button = styled.a`
  padding: 0.5rem 1rem;
  background-color: #7c4dff;
  border-radius: 290486px;
  width: 30%;
  color: white;
  margin: 1rem 0;
  transition: 0.3s all ease-in-out;
  display: inline-block;
  border: 3px solid #7c4dff;
  &:hover {
    box-shadow: 0 10px 20px var(--pink), 0 6px 6px var(--pink);
    border-color: var(--pink);
  }
  &:active {
    box-shadow: none;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`

const Skills = (props) => {
  const animateBorder = useSpring({
    width: "100%",
    delay: 300,
    config: config.molasses,
    from: {
      width: "0%",
    },
  })
  return (
    <Wrapper style={props.style}>
      <div className="title">
        <h3>{props.title}</h3>
        <animated.div className="line" style={animateBorder}></animated.div>
      </div>
      <a
        className="img_wrap"
        href={props.site}
        target="_blank"
        rel="noreferrer"
      >
        {props.image}
      </a>
      <p>{props.text}</p>
      <p>{props.tech}</p>
      <Buttons>
        <Button href={props.gitHub} target="_blank" rel="noreferrer">
          GitHub
        </Button>{" "}
        <Button href={props.site} target="_blank" rel="noreferrer">
          Site
        </Button>
      </Buttons>
    </Wrapper>
  )
}

export default Skills
