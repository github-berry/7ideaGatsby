import React, { Fragment, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import SwiperCore, { Autoplay, Pagination } from "swiper"
import Aos from "aos"
import "aos/dist/aos.css"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"

SwiperCore.use([Autoplay, Pagination])

const query = graphql`
  {
    allWpPage(filter: { uri: { eq: "/projects/" } }) {
      nodes {
        projectPage1 {
          projectname1
          projectimage1 {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        projectPage2 {
          projectname2
          projectimage2 {
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

const HomeProjectComponent = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  const data = useStaticQuery(query)

  const {
    allWpPage: { nodes },
  } = data
  const project = nodes[0]

  return (
    <Fragment>
      <HomeProject data-aos="fade-up">
        <ProjectTitle>
          <div className="section-title">
            <Title>
              Our
              <br />
              Projects.
            </Title>
            <div className="desc" style={{ margin: "2rem 0" }}>
              7 idea is a new startup company that offers IT solutions and
              online marketing. We are trying to build a bigger team to answer
              our business needs.
            </div>
            <Button>
              <a href="#" className="btn btn-lg btn-outline-light">
                More Projects
              </a>
            </Button>
          </div>
        </ProjectTitle>
        <ProjectSlideWrapper>
          <Swiper
            loop={true}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {Object.keys(project).map((key, index) => {
              ++index
              // const txtProjectName = "projectname" + index
              const txtProjectImage = "projectimage" + index
              const pathImage = getImage(
                project[key][txtProjectImage].localFile
              )
              // const title = project[key][txtProjectName]
              return (
                <SwiperSlide key={index}>
                  <Thumbnail>
                    <Image image={pathImage} width="100%" />
                  </Thumbnail>
                </SwiperSlide>
              )
            })}
            {/* <SwiperSlide>
              <img src="/project-1.jpeg" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/project-1.jpeg" width="100%" />
            </SwiperSlide> */}
          </Swiper>
        </ProjectSlideWrapper>
      </HomeProject>
    </Fragment>
  )
}
const HomeProject = styled.div`
  background-color: #000;
  color: #fff;
  padding: 2rem;
  @media only screen and (min-width: 1200px) {
    padding: 120px 0 120px 120px;
    display: flex;
    flex-direction: row;
  }
`
const ProjectTitle = styled.div`
  @media only screen and (min-width: 1200px) {
    width: 33.33%;
    padding-right: 64px;
  }
`
const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #d02020;
  @media only screen and (min-width: 1200px) {
    font-size: 7.5rem;
    line-height: 1;
  }
`
const Button = styled.div`
  margin-bottom: 2rem;
  & .btn-outline-light {
    position: relative;
    z-index: 0;
    overflow: hidden;
    border-width: 2px;
    color: #f8f9fa;
    border-color: #f8f9fa;
  }
  & .btn-lg {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;
  }
  & .btn {
    border-radius: 0;
    padding-left: 2rem;
    padding-right: 2rem;
    transition: all 0.5s ease;
    &:hover {
      color: #333;
      background-color: #fff;
      border-color: #fff;
      box-shadow: inset 300px 0 0 0 #fff;
    }
  }
`
const ProjectSlideWrapper = styled.div`
  position: relative;
  overflow: hidden;
  @media only screen and (min-width: 1200px) {
    width: 66.66%;
    margin-bottom: -180px;
  }
`
const Thumbnail = styled.div`
  height: 80vw;
  @media only screen and (min-width: 1200px) {
    height: 50vw;
  }
`
const Image = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`
export default HomeProjectComponent
