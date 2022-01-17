import React, { Fragment } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import NavbarComponent from "../components/Navbar"
import SidebarComponent from "../components/Sidebar"
import FooterComponent from "../components/footer"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"

const query = graphql`
  {
    allWpPage(filter: { uri: { eq: "/team/" } }) {
      nodes {
        teamPage1 {
          teamimage1 {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          teamname1
          teamposition1
        }
        teamPage2 {
          teamimage2 {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          teamname2
          teamposition2
        }
        teamPage3 {
          teamimage3 {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          teamname3
          teamposition3
        }
        teamPage4 {
          teamimage4 {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          teamname4
          teamposition4
        }
        teamPage5 {
          teamimage5 {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          teamname5
          teamposition5
        }
        teamPage6 {
          teamimage6 {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          teamname6
          teamposition6
        }
        teamPage7 {
          teamimage7 {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          teamname7
          teamposition7
        }
        teamPage8 {
          teamimage8 {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          teamname8
          teamposition8
        }
        teamPage9 {
          teamimage9 {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          teamname9
          teamposition9
        }
        teamPage10 {
          teamimage10 {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          teamname10
          teamposition10
        }
      }
    }
  }
`
const TeamPage = () => {
  const data = useStaticQuery(query)
  const {
    allWpPage: { nodes },
  } = data
  const teams = nodes[0]

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
          <Title>Team</Title>
        </CustomContainer>
      </PageTitle>
      <ContentArea>
        <CustomContainer>
          <PostDisplay>
            {Object.keys(teams).map((key, index) => {
              ++index
              const txtTeamImage = "teamimage" + index
              const txtTeamName = "teamname" + index
              const txtTeamPosition = "teamposition" + index
              // const pathImage = teams[key][txtTeamImage].sourceUrl
              const name = teams[key][txtTeamName]
              const position = teams[key][txtTeamPosition]
              const pathImage = getImage(
                teams[key][txtTeamImage].localFile.childImageSharp
              )
              const localFile = getImage(teams[key][txtTeamImage].localFile)
              const bgImage = convertToBgImage(localFile)
              return (
                <Item key={index}>
                  {/* <Thumbnail>
                    <Image src={pathImage} />
                  </Thumbnail> */}
                  <Thumbnail>
                    <Link
                      to="/teamDetail"
                      state={{
                        title: name,
                        bgImage: bgImage,
                      }}
                    >
                      <Image image={pathImage} alt="" />
                    </Link>
                  </Thumbnail>

                  <Caption>
                    <h3 className="title">{name}</h3>
                    <div className="position">{position}</div>
                  </Caption>
                  {/* <Thumbnail>
                    <Link
                      to="/teamDetail/"
                      state={{ pathImage: pathImage, name: name }}
                    >
                      <Image src={pathImage} />
                    </Link>
                  </Thumbnail>
                  <Caption>
                    <h3 className="title">{name}</h3>
                    <div className="position">{position}</div>
                  </Caption> */}
                </Item>
              )
            })}
          </PostDisplay>
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
const PostDisplay = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  // @media only screen and (min-width: 1200px) {
  //   flex-wrap: wrap;
  // }
`
// const Item = styled.div`
//   margin-bottom: 2rem;
//   @media only screen and (min-width: 1200px) {
//     // &:not(&:nth-child(3n)) {
//     margin-right: 2rem;
//     // }
//   }
//   @media only screen and (min-width: 1200px) {
//     width: calc((100% - 2rem) / 3);
//     height: 350px;
//   }
//   overflow: hidden;
// `
const Item = styled.div`
  margin-bottom: 2rem;
  @media only screen and (min-width: 1200px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  @media only screen and (min-width: 1200px) {
    width: calc((100% - 2rem) / 3);
  }
`
const Thumbnail = styled.div`
  height: 350px;
  @media only screen and (min-width: 1200px) {
    height: 350px;
  }
  @media only screen and (max-width: 1200px) {
    width: 400px;
  }
  overflow: hidden;
`
const Image = styled(GatsbyImage)`
  filter: grayscale(100%);
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  backface-visibility: hidden;
  &:hover {
    transform: scale(1.1);
  }
`
// const Image = styled.img`
//   filter: grayscale(100%);
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   object-position: top;
//   transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
//   cursor: pointer;
//   backface-visibility: hidden;
//   &:hover {
//     transform: scale(1.1);
//   }
// `
// const Thumbnail = styled.div`
//   overflow: hidden;
// `
// const Image = styled.img`
//   max-width: 100%;
//   height: auto;
//   transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
//   aspect-ratio: auto 600 / 572;
//   &:hover {
//     transform: scale(1.1);
//     object-fit: contain;
//   }
//   object-fit: contain;
// `
const Caption = styled.div`
  margin-top: 1rem;
  & .title {
    font: 700 normal 1.5rem "Poppins";
    margin-bottom: 0;
  }
  & .position {
    font: 400 normal 1rem "Poppins";
    color: #666;
  }
`
export default TeamPage
