import React, { Fragment, useEffect } from "react"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import SwiperCore, { Autoplay, Pagination } from "swiper"
import Aos from "aos"
import "aos/dist/aos.css"
import styled from "styled-components"
import "normalize.css"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"

SwiperCore.use([Autoplay, Pagination])

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

const HomeClientComponent = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  const data = useStaticQuery(query)
  const {
    allWpPage: { nodes },
  } = data
  const client = nodes[0]

  return (
    <Fragment>
      <HomeClients data-aos="fade-up">
        <ClientHeader>
          <div className="cover-client">
            <div className="section-title">
              <Title>
                Beloved
                <br />
                Clients.
              </Title>
            </div>
          </div>
          <div>
            <div className="client-content">
              <div className="content">
                7 idea is a new startup company that offers IT solutions and
                online marketing. We are trying to build a bigger team to answer
                our business needs. As we are growing we are looking for people
                to join us and build up our team and culture. Our service offers
                a new cutting edge technology and we are able to move quickly to
                catch up with the new technology.
              </div>
              <a href="#" className="btn btn-outline-light btn-lg">
                More Clients
              </a>
            </div>
          </div>
        </ClientHeader>
        <Swiper
          loop={true}
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          style={{ padding: "120px 0" }}
        >
          {Object.keys(client).map((key, index) => {
            ++index
            const txtClientName = "clientname" + index
            const txtClientImage = "clientimage" + index
            const pathImage = getImage(
              client[key][txtClientImage].localFile.childImageSharp
            )
            const localFile = getImage(client[key][txtClientImage].localFile)
            const bgImage = convertToBgImage(localFile)
            const title = client[key][txtClientName]
            return (
              <SwiperSlide key={index}>
                <Thumbnail>
                  <Link
                    to="/clientDetail"
                    state={{ bgImage: bgImage, title: title }}
                  >
                    <Image image={pathImage} />
                  </Link>
                </Thumbnail>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </HomeClients>
    </Fragment>
  )
}

const HomeClients = styled.div`
  background-color: #d02020;
  padding: 2rem;
  margin: 2rem;
  color: #fff;
  position: relative;
  z-index: 1;
  @media only screen and (min-width: 1200px) {
    padding: 120px;
    margin: -120px 120px 120px;
  }
`
const ClientHeader = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  @media only screen and (min-width: 1200px) {
    -webkit-box-orient: horizontal;

    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
  }
  & .cover-client {
    display: block;
    width: calc((100% - 2rem) / 2) !important;
  }
  & .btn-lg {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
  }
  & .btn-outline-light {
    color: #f8f9fa;
    border-color: #f8f9fa;
    position: relative;
    z-index: 0;
    overflow: hidden;
    border-width: 2px;
  }
  & .btn {
    margin-top: 2rem;
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
const Title = styled.h2`
  width: 100%;
  font-size: 3rem;
  font-weight: 700;
  margin: 0px 0px 8px;
  @media only screen and (min-width: 1200px) {
    font-size: 7.5rem;
    // line-height: 1;
    width: 600px;
    display: block;
  }
`
const Thumbnail = styled.div`
  overflow: hidden;
  height: 30vw;
`
const Image = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: top;
`

export default HomeClientComponent
