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

// const query = graphql`
//   {
//     allWpPage(filter: { uri: { eq: "/client/" } }) {
//       nodes {
//         clientPage1 {
//           clientname1
//           clientimage1 {
//             sourceUrl
//           }
//         }
//         clientPage2 {
//           clientname2
//           clientimage2 {
//             sourceUrl
//           }
//         }
//       }
//     }
//   }
// `

const query = graphql`
  {
    allWpPage(filter: { uri: { eq: "/client/" } }) {
      nodes {
        clientPage1 {
          clientname1
          clientimage1 {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        clientPage2 {
          clientname2
          clientimage2 {
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
const ClientPage = () => {
  const data = useStaticQuery(query)
  const {
    allWpPage: { nodes },
  } = data
  const client = nodes[0]
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
          <Title>Clients</Title>
        </CustomContainer>
      </PageTitle>
      <ContentArea>
        <CustomContainer>
          <PostDisplay>
            {Object.keys(client).map((key, index) => {
              ++index
              const txtClientName = "clientname" + index
              const txtClientImage = "clientimage" + index
              const title = client[key][txtClientName]
              const pathImage = getImage(
                client[key][txtClientImage].localFile.childImageSharp
              )
              const localFile = getImage(client[key][txtClientImage].localFile)
              const bgImage = convertToBgImage(localFile)
              return (
                <Item key={index}>
                  <Thumbnail>
                    <Link
                      to="/clientDetail"
                      state={{ bgImage: bgImage, title: title }}
                    >
                      <Image
                        width="600"
                        height="572"
                        image={pathImage}
                        alt=""
                      />
                    </Link>
                  </Thumbnail>
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
  @media only screen and (min-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
  }
`
const Item = styled.div`
  margin-bottom: 2rem;
  @media only screen and (min-width: 1200px) {
    &:not(&:nth-child(3n)) {
      margin-right: 2rem;
    }
  }
  @media only screen and (min-width: 1200px) {
    width: calc((100% - 2rem) / 3);
  }
`
const Thumbnail = styled.div`
  overflow: hidden;
`
const Image = styled(GatsbyImage)`
  max-width: 100%;
  height: auto;
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
  aspect-ratio: auto 600 / 572;
  &:hover {
    transform: scale(1.1);
  }
`
export default ClientPage