import React, { Fragment, useState, useEffect } from "react"
import styled from "styled-components"
import { Container } from "react-bootstrap"
import NavbarComponent from "../components/Navbar"
import SidebarComponent from "../components/Sidebar"
import FooterComponent from "../components/footer"
import BackgroundImage from "gatsby-background-image"

const ProjectDetail = ({ location }) => {
  const [title, setTitle] = useState("")
  const [bgImage, setBgImage] = useState({})

  useEffect(() => {
    if (location) {
      setTitle(location.state.title)
      setBgImage(location.state.bgImage)
    }
  }, [])

  return (
    <Fragment>
      {location && (
        <div>
          <NavbarComponent />
          <SidebarComponent />
          <PageTitle
            Tag="div"
            {...bgImage}
            style={{
              paddingTop: "240px",
              paddingBottom: "120px",
            }}
          >
            <CustomContainer>
              <Title>{title}</Title>
            </CustomContainer>
          </PageTitle>
          <ContentArea>
            <CustomContainer></CustomContainer>
          </ContentArea>
          <FooterComponent />
        </div>
      )}
    </Fragment>
  )
}
const PageTitle = styled(BackgroundImage)`
  background-color: #000;
  color: #fff;
  position: relative;
  z-index: 0;
  background-position: center center;
  background-size: cover;
  &:before {
    background-image: url("") !important;
    background-color: rgba(0, 0, 0, 0.8) !important;
    opacity: 1 !important;
  }
  &:after {
    background-color: rgba(0, 0, 0, 0.8) !important;
    opacity: 1 !important;
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
export default ProjectDetail
