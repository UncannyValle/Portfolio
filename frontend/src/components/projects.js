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
                gatsbyImageData(
                  width: 500
                  height: 350
                  placeholder: DOMINANT_COLOR
                )
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

  const skillList = [
    {
      title: "Atole Tech",
      src: getImage(data.atole),
      alt: "atole site",
      site: "https://atoletech.gatsbyjs.io",
      text: "Freelance website: Where folklore meets design",
      tech: "React | JS | Styled-Components | GraphQl",
      gitHub: "https://github.com/Atole-Media/atole-tech-website",
    },
    {
      title: "Sapa Fashion Store",
      src: getImage(data.sapa),
      alt: "ecomerce site",
      site: "https://sapa-fashion.netlify.app/",
      text: "An Ecomerce Site Using Shopify",
      tech: "Gatsby | React | JS | GraphQl | Shopify",
      gitHub: "https://github.com/UncannyValle/Sapa-fashion",
    },
    {
      title: "Calculator App",
      src: getImage(data.calculator),
      alt: "calculator app",
      site: "https://calcutron.netlify.com",
      text: "Just a calculator made with React",
      tech: "React | JS | CSS | HTML | Netlify",
      gitHub: "https://github.com/UncannyValle/calcutron",
    },
    {
      title: "Avocado Clock",
      src: getImage(data.avocado),
      alt: "avocado clock",
      site: "https://avocadoclock.netlify.app/",
      text: "A work timer, to keep you motivated",
      tech: " React | JS| React-Spring",
      gitHub: "https://github.com/UncannyValle/Avocado-Clock",
    },
    {
      title: "Movie Quoter",
      src: getImage(data.movie),
      alt: "movie quote machine",
      site: "https://movie-quote-machine.netlify.com/",
      text: "Built in React, uses an external API to access data",
      tech: "React | JS | CSS | HTML | Netlify",
      gitHub: "https://github.com/UncannyValle/MovieQuote-machine",
    },
    {
      title: "Mario Drum Machine",
      src: getImage(data.mario),
      alt: "mario drummer",
      site: "https://mp-soundmaker.netlify.com",
      text: "A sound tester with the music of Mario Paint",
      tech: "React | JS | CSS | HTML | Netlify",
      gitHub: "https://github.com/UncannyValle/MarioPaintSoundMachine",
    },
  ]
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
    padding: 0 ;
  }
`
