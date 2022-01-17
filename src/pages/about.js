import React, { Fragment } from "react"
import styled from "styled-components"
import { Container } from "react-bootstrap"
import NavbarComponent from "../components/Navbar"
import SidebarComponent from "../components/Sidebar"
import FooterComponent from "../components/footer"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const query = graphql`
  {
    allWpPage(filter: { uri: { eq: "/about/" } }) {
      nodes {
        aboutPage {
          description1
          description2
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`

const AboutPage = () => {
  const data = useStaticQuery(query)
  const {
    allWpPage: { nodes },
  } = data
  const {
    aboutPage: {
      description1,
      description2,
      image: { localFile },
    },
  } = nodes[0]
  const pathImage = getImage(localFile)
  return (
    <Fragment>
      <NavbarComponent />
      <SidebarComponent />
      <PageTitle
        style={{
          backgroundImage: `url(${""})`,
          paddingTop: "240px",
          paddingBottom: "120px",
        }}
      >
        <CustomContainer>
          <Title>About Us.</Title>
        </CustomContainer>
      </PageTitle>
      <ContentArea>
        <CustomContainer>
          <WpBlockColumns>
            <WpBlockColumn style={{ flexBasis: "33.33%" }}>
              <WpBlockImage>
                <GatsbyImage image={pathImage} width="100%" />
              </WpBlockImage>
            </WpBlockColumn>
            <WpBlockColumn style={{ flexBasis: "66.66%" }}>
              <p>{description1}</p>
              <p>{description2}</p>
            </WpBlockColumn>
          </WpBlockColumns>
        </CustomContainer>
      </ContentArea>
      <FooterComponent />
    </Fragment>
  )
}
const PageTitle = styled.div`
  background-color: #000;
  color: #fff;
  position: relative;
  z-index: 0;
  background-position: center center;
  background-size: cover;
  &:before {
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: -1;
  }
`
const CustomContainer = styled(Container)`
  width: 100%;
  padding-right: 15px !important;
  padding-left: 15px !important;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`
const Title = styled.h2`
  font: 700 normal 3rem "Poppins";
  @media only screen and (min-width: 1200px) {
    font: 700 normal 5rem "Poppins";
  }
`
const ContentArea = styled.div`
  padding: 2rem 0;
  @media only screen and (min-width: 1200px) {
    padding: 5rem 0;
  }
`
const WpBlockColumns = styled.div`
  display: flex;
  margin-bottom: 1.75em;
  box-sizing: border-box;
  flex-wrap: wrap;
  @media (min-width: 782px) {
    flex-wrap: nowrap;
  }
`
const WpBlockColumn = styled.div`
  &:not(&:first-child) {
    margin-left: 2em;
  }
  flex-grow: 1;
  min-width: 0;
  word-break: break-word;
  overflow-wrap: break-word;
  @media (min-width: 782px) {
    flex-grow: 0;
  }
  @media (min-width: 600px) and (max-width: 781px) {
    flex-basis: calc(50% - 1em) !important;
    flex-grow: 0;
  }
`
const WpBlockImage = styled.figure`
  margin: 0 0 1em;
`
export default AboutPage
