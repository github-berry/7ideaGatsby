import React, { Fragment, useState, useEffect } from "react"
import styled from "styled-components"
import { Parallax } from "react-scroll-parallax"
import { FaRegEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import homeMainBg from "../../static/home-main-bg.jpeg"
import Aos from "aos"
import "aos/dist/aos.css"
import "normalize.css"

const HomeMainComponent = () => {
  const [active, setActive] = useState(true)
  let slide = []
  useEffect(() => {
    Aos.init({ duration: 2000 })
    if (active === false) {
      setActive(true)
    }
  }, [active])

  for (let i = 0; i < 3; i++) {
    slide.push(
      <SwiperSlide key={i}>
        <HomeSlideWrapperMake>
          <SwiperWrapperMake>
            <SwiperSlideMake>
              <CustomParallax y={[100, -100]}>
                <SlideTitleMake>
                  <div
                    className={`${active ? "greeting" : ""}`}
                    data-aos="fade-up"
                    data-aos-delay="100"
                    style={{ display: `${active ? "block" : "none"}` }}
                  >
                    we're
                  </div>
                  <h2
                    className={`${active ? "title" : ""}`}
                    data-aos="fade-up"
                    data-aos-delay="300"
                    style={{ display: `${active ? "block" : "none"}` }}
                  >
                    7 idea
                  </h2>
                  <div
                    className={`${active ? "subtitle" : ""}`}
                    data-aos="fade-up"
                    data-aos-delay="500"
                    style={{ display: `${active ? "block" : "none"}` }}
                  >
                    Online Marketing
                  </div>
                  <div
                    className={`${active ? "desc" : ""}`}
                    data-aos="fade-up"
                    data-aos-delay="700"
                    style={{ display: `${active ? "block" : "none"}` }}
                  >
                    7 idea is a new startup company that offers IT solutions and
                    online marketing.
                  </div>
                  <a
                    href="#"
                    className={`${active ? "btn btn-outline-light1" : ""}`}
                    data-aos="fade-up"
                    data-aos-delay="900"
                    style={{ display: `${active ? "inline-block" : "none"}` }}
                  >
                    About Us
                  </a>
                </SlideTitleMake>
              </CustomParallax>
            </SwiperSlideMake>
          </SwiperWrapperMake>
        </HomeSlideWrapperMake>
      </SwiperSlide>
    )
  }
  return (
    <Fragment>
      <HomeMain>
        <ContactBar>
          <SocialIcon>
            <a href="#">
              <MailIcon />
            </a>
            <a href="#" style={{ marginTop: "1rem" }}>
              <FaceBookIcon />
            </a>
            <a href="#" style={{ marginTop: "1rem" }}>
              <LinkedinIcon />
            </a>
          </SocialIcon>
          <Line />
          <Title>
            <strong>Contact</strong>
            {" Us"}
          </Title>
        </ContactBar>
        <Swiper
          loop={true}
          onSlideChange={() => setActive(false)}
          onSwiper={swiper => console.log(swiper)}
        >
          {slide}
        </Swiper>
      </HomeMain>
    </Fragment>
  )
}

const HomeMain = styled.div`
  display: block;
`
const ContactBar = styled.div`
  position: absolute;
  width: 120px;
  height: calc(100vh - 120px);
  top: 120px;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  z-index: 2;
  background-color: #333;
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`
const SocialIcon = styled.div`
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: -2px;
  margin-left: -1px;
  & a {
    color: #fff;
    font-size: 1rem;
  }
  & a:hover{
    color:#fff;
  }
`
const Line = styled.div`
  width: 1px;
  height: 120px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 1rem 0;
`
const Title = styled.div`
  color: #fff;
  font: 400 normal 1.5rem "Poppins";
  white-space: nowrap;
  transform: rotate(-90deg) translateX(-64px);
  text-transform: uppercase;
  margin-bottom: 64px;
`
const MailIcon = styled(FaRegEnvelope)`
  box-sizing: border-box;
`
const FaceBookIcon = styled(FaFacebook)`
  box-sizing: border-box;
`
const LinkedinIcon = styled(FaLinkedin)`
  box-sizing: border-box;
`
const HomeSlideWrapperMake = styled.div`
  overflow: hidden;
  position: relative;
`
const SwiperWrapperMake = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  box-sizing: content-box;
`
const SwiperSlideMake = styled.div`
  background-image: url(${homeMainBg});
  width: 100%;
  height: 100vh;
  background-position: center center;
  background-size: cover;
  position: relative;
  z-index: 0;
  display: flex;
  align-items: center;
  &:before {
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
const CustomParallax = styled(Parallax)`
  width: 100%;
`
const SlideTitleMake = styled.div`
  color: #fff;
  margin-left: 15%;
  margin-right: 15%;
  @media only screen and (min-width: 1200px) {
    margin-left: 25%;
    max-width: 50%;
  }
  & .greeting {
    font-size: 1rem;
    text-transform: uppercase;
    @media only screen and (min-width: 1200px) {
      font-size: 1.5rem;
    }
  }
  & .title {
    font-size: 5rem;
    text-transform: uppercase;
    color: #d02020;
    font-weight: 700;
    line-height: 1;
    @media only screen and (min-width: 1200px) {
      font-size: 10rem;
    }
  }
  & .subtitle {
    font-size: 1.75rem;
    text-transform: uppercase;
    @media only screen and (min-width: 1200px) {
      font-size: 3.5rem;
    }
  }
  & .desc {
    font-size: 1rem;
    margin-bottom: 2rem;
    @media only screen and (min-width: 1200px) {
      font-size: 1.25rem;
      width: 75%;
      max-width: 75%;
      margin-bottom: 2rem;
    }
  }
  & .btn {
    @media only screen and (min-width: 1200px) {
      font-weight: 700;
      letter-spacing: 5px;
      color: #fff;
      text-transform: uppercase;
    }
    border: solid 2px #fff;
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    border-radius: 0;
    text-decoration: none;
    color: #fff;
    &:hover {
      color: #333;
      border-color: #fff;
    }
  }
  & .btn-outline-light1 {
    position: relative;
    z-index: 0;
    overflow: hidden;
    &:before {
      display: block;
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background-color: #fff;
      top: 0;
      left: -100%;
      transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
      z-index: -1;
      border: solid 2px #fff;
    }
    &:hover {
      &:before {
        left: 0%;
      }
    }
  }
`
export default HomeMainComponent
