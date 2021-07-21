import React from "react"
import { bool, func } from "prop-types"
import styled from "styled-components"

//Styles
const StyledBurger = styled.button`
  top: 5%;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 4rem;
  height: 4rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  margin-right: 3rem;
  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: flex;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1.5rem;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 60px;
    height: 5px;
    background: cyan;
    border-radius: 10px;
    transition: all 0.5s ease-in-out;
    position: relative;
    transform-origin: 1px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 39px;
      height: 5px;
    }
  }
  #one {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    background-color: ${({ open }) => (open ? "var(--pink)" : "cyan")};
  }

  #two {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
  }

  #three {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }
`

const Hamburger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div id="one" />
      <div id="two" />
      <div id="three" />
    </StyledBurger>
  )
}

Hamburger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Hamburger
