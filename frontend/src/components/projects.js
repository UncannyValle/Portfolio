import React from "react"
import Skills from "./skills"
import Title from "./title"
import styled from "styled-components"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import SectionWrapper from "./sectionWrapper"
import { useTrail, config } from "@react-spring/core"
import { graphql, useStaticQuery } from "gatsby"

export const Projects = (props) => {
  const data = useStaticQuery(graphql`
    query sanity {
      allSanityProject(sort: { fields: _createdAt, order: ASC }) {
        edges {
          node {
            image {
              asset {
                gatsbyImageData(width: 500, height: 350, placeholder: BLURRED)
              }
            }
            gitHubUrl
            projectUrl
            title
            description
            tech
          }
        }
      }
    }
  `)

  const boxTrail = useTrail(data.allSanityProject.edges.length, {
    opacity: 1,
    config: config.molasses,
    from: {
      opacity: 0.0,
    },
  })
  return (
    <div id={props.id}>
      <SectionWrapper>
        <Title>A bit of my work</Title>
        <SkillsWrapper>
          {boxTrail.map((style, i) => (
            <Skills
              style={style}
              key={i}
              title={data.allSanityProject.edges[i].node.title}
              image={
                <GatsbyImage
                  image={
                    data.allSanityProject.edges[i].node.image.asset
                      .gatsbyImageData
                  }
                  a
                  alt={data.allSanityProject.edges[i].node.title}
                  placeholder="blurred"
                />
              }
              site={data.allSanityProject.edges[i].node.projectUrl}
              text={data.allSanityProject.edges[i].node.description}
              tech={data.allSanityProject.edges[i].node.tech}
              gitHub={data.allSanityProject.edges[i].node.gitHubUrl}
            />
          ))}
        </SkillsWrapper>
      </SectionWrapper>
    </div>
  )
}

const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: center;
  width: 100%;
  padding: 0 2rem;
  grid-gap: 1em 1em;
  margin: 0 auto;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0;
  }
`
