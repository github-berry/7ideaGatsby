import React, { Fragment, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import SwiperCore, { Autoplay, Pagination } from "swiper"
import Aos from "aos"
import "aos/dist/aos.css"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

SwiperCore.use([Autoplay, Pagination])

const query = graphql`
  {
    allWpPage(filter: { uri: { eq: "/team/" } }) {
      nodes {
        teamPage1 {
          teamimage1 {
            sourceUrl
          }
          teamname1
          teamposition1
        }
        teamPage2 {
          teamimage2 {
            sourceUrl
          }
          teamname2
          teamposition2
        }
        teamPage3 {
          teamimage3 {
            sourceUrl
          }
          teamname3
          teamposition3
        }
        teamPage4 {
          teamimage4 {
            sourceUrl
          }
          teamname4
          teamposition4
        }
        teamPage5 {
          teamimage5 {
            sourceUrl
          }
          teamname5
          teamposition5
        }
        teamPage6 {
          teamimage6 {
            sourceUrl
          }
          teamname6
          teamposition6
        }
        teamPage7 {
          teamimage7 {
            sourceUrl
          }
          teamname7
          teamposition7
        }
        teamPage8 {
          teamimage8 {
            sourceUrl
          }
          teamname8
          teamposition8
        }
        teamPage9 {
          teamimage9 {
            sourceUrl
          }
          teamname9
          teamposition9
        }
        teamPage10 {
          teamimage10 {
            sourceUrl
          }
          teamname10
          teamposition10
        }
      }
    }
  }
`

const HomeTeamComponent = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const data = useStaticQuery(query)
  const {
    allWpPage: { nodes },
  } = data
  const teams = nodes[0]
  return (
    <Fragment>
      <HomeTeam data-aos="fade-up">
        <TeamTitle>
          <div className="section-title">
            <Title>
              Meet <br />
              the
              <br />
              Team.
            </Title>
            <div className="desc" style={{ margin: "2rem 0" }}>
              7 idea is a new startup company that offers IT solutions and
              online marketing. We are trying to build a bigger team to answer
              our business needs.
            </div>
            <MoreTeamButton>
              <a href="#" className="btn btn-lg btn-primary">
                More Team
              </a>
            </MoreTeamButton>
          </div>
        </TeamTitle>
        <TeamSlideWrapper>
          <Swiper
            loop={true}
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            style={{ paddingButtom: "120px" }}
          >
            {/* {Object.keys(teams).map((key, index) => {
              ++index
              const txtTeamImage = "teamimage" + index
              const txtTeamName = "teamname" + index
              const txtTeamPosition = "teamposition" + index
              const pathImage = teams[key][txtTeamImage].sourceUrl
              const name = teams[key][txtTeamName]
              const position = teams[key][txtTeamPosition]
              return (
                <SwiperSlide>
                  <LinkTeam href="#">
                    <img src={pathImage} width="100%" />
                    <TeamInfo>
                      <TeamName>{name}</TeamName>
                      <TeamLine className="line"></TeamLine>
                      <TeamPosition>{position}</TeamPosition>
                    </TeamInfo>
                  </LinkTeam>
                </SwiperSlide>
              )
            })} */}
            <SwiperSlide>
                <LinkTeam href="#">
                  <img src="/team-2.jpeg" width="100%" />
                  <TeamInfo>
                    <TeamName>Jane Doe</TeamName>
                    <TeamLine className="line"></TeamLine>
                    <TeamPosition>Programmer</TeamPosition>
                  </TeamInfo>
                </LinkTeam>
              </SwiperSlide>
              <SwiperSlide>
                <LinkTeam href="#">
                  <img src="/team-1.jpeg" width="100%" />
                  <TeamInfo>
                    <TeamName>John Doe</TeamName>
                    <TeamLine className="line"></TeamLine>
                    <TeamPosition>Programmer</TeamPosition>
                  </TeamInfo>
                </LinkTeam>
              </SwiperSlide>
          </Swiper>
        </TeamSlideWrapper>
      </HomeTeam>
    </Fragment>
  )
}
const HomeTeam = styled.div`
  padding: 2rem;
  @media only screen and (min-width: 1200px) {
    margin-left: 120px;
    padding-bottom: 120px;
    display: flex;
  }
`
const TeamTitle = styled.div`
  @media only screen and (min-width: 1200px) {
    width: 33.33%;
    padding-right: 64px;
  }
`
const TeamSlideWrapper = styled.div`
  position: relative;
  overflow: hidden;
  @media only screen and (min-width: 1200px) {
    width: 66.66%;
    position: relative;
    overflow: hidden;
  }
`
const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  @media only screen and (min-width: 1200px) {
    font-size: 7.5rem;
    line-height: 1;
  }
`
const MoreTeamButton = styled.div`
  margin-bottom: 2rem;
  &:hover .btn-primary {
    background-color: #d02020;
    border-color: #d02020;
  }
  & .btn-primary {
    background-color: #d02020;
    border-color: #d02020;
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
  }
`
const TeamImage = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const Image = styled.img`
  // width: 31%;
  // height: auto;
  // @media only screen and (min-width: 1200px) {
  //   width: 31%;
  //   height: 40%;
  // }
  // @media only screen and (max-width: 1500px) {
  //   width: 31%;
  //   height: 45%;
  // }
  width: 50%;
  @media only screen and (min-width: 991px) {
    width: 100%;
  }
`
const Image2 = styled(Image)`
  @media only screen and (max-width: 992px) {
    display: none;
  }
`
const Image3 = styled(Image)`
  @media only screen and (max-width: 992px) {
    display: none;
  }
`
const TeamInfo = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0;
`
const LinkTeam = styled.a`
  display: block;
  position: relative;
  color: #fff;
  text-decoration: none;
  & ${TeamInfo}:hover {
    opacity: 1;
  }
  &:hover .line {
    width: 64px;
  }
`
const TeamName = styled.div`
  font: 700 normal 1.5rem "Poppins";
  color: #fff;
`
const TeamLine = styled.div`
  width: 0px;
  height: 4px;
  background-color: #d02020;
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
  margin: 1rem auto;
`
const TeamPosition = styled.div`
  font: 400 normal 1rem "Poppins";
  color: #fff;
`
export default HomeTeamComponent
