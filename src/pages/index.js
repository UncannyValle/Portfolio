import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

// CSS
const IndexWrapper = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Home = styled.div`
  padding: 0 2em;
  font-size: 2em;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndexWrapper>
      <Home>
        <h1>Hi, I'm Julian!</h1>
        <p>Front End Developer</p>
        <p>React Programmer | Freelancer | Silly Husband</p>
      </Home>
    </IndexWrapper>
  </Layout>
)

export default IndexPage
