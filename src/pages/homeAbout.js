import React, { useState, useEffect, Fragment } from "react"
import styled from "styled-components"
import { Parallax } from "react-scroll-parallax"
import homeAboutBg from "../../static/home-about-bg.jpeg"
import { FaArrowDown } from "react-icons/fa"
import { AiOutlineArrowDown } from "react-icons/ai"
import { FiArrowDown } from "react-icons/fi"
import "normalize.css"

const HomeAboutComponent = () => {
  const [height, setHeight] = useState(0)
  const [height2, setHeight2] = useState(0)
  useEffect(() => {
    const checkHeightScreen = () => {
      const h = window.scrollY
      setHeight(h === 0 ? h : "-" + h)
      setHeight2(h === 0 ? h : "-" + h * 4)
    }
    window.addEventListener("scroll", checkHeightScreen)

    // return () => {
    //   window.removeEventListener("scroll")
    // }
  }, [])
  return (
    <Fragment>
      <HomeAbout>
        <ArrowDownRedBox>
          <Parallax y={[8.4, -180]}>
            <ArrowDownRed height={height}>
              <ArrowDownIcon />
            </ArrowDownRed>
          </Parallax>
        </ArrowDownRedBox>
        <Square1Box>
          <Parallax y={[0, -180]}>
            <Square1 height2={height2} />
          </Parallax>
        </Square1Box>
        <AboutTitle>
          <Title>
            About
            <br />
            Us.
          </Title>
        </AboutTitle>
        <Parallax y={[0, -100]}>
          <AboutContent>
            <div className="content">
              7 idea is a new startup company that offers IT solutions and
              online marketing. We are trying to build a bigger team to answer
              our business needs. As we are growing we are looking for people to
              join us and build up our team and culture. Our service offers a
              new cutting edge technology and we are able to move quickly to
              catch up with the new technology. <br />
              <br />7 idea is a new startup company that offers IT solutions and
              online marketing. We are trying to build a bigger team to answer
              our business needs. As we are growing we are looking for people to
              join us and build up our team and culture. Our service offers a
              new cutting edge technology and we are able to move quickly to
              catch up with the new technology.
            </div>
            <a href="#" className="btn btn-outline-light btn-lg">
              More Us
            </a>
          </AboutContent>
        </Parallax>
        <Square2Box>
          <CustomParallax y={[0, -180]}>
            <Square2 />
          </CustomParallax>
        </Square2Box>
      </HomeAbout>
    </Fragment>
  )
}
const HomeAbout = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url(${homeAboutBg}) center right no-repeat;
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  z-index: 1;
  padding: 2rem;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  justify-content: center;
  @media only screen and (min-width: 1200px) {
    display: flex;
    align-items: unset;
  }
`
const ArrowDownRedBox = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateY(-50%);
`
//ที่เพิ่มระยะห่างด้านล่างเข้ามา
const CustomParallax = styled(Parallax)`
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
`
const ArrowDownRed = styled.div`
  // transform: translateY(${props => props.height}px);
  // transform: translateY(auto)
  font-size: 4rem;
  text-align: center;
  background-color: #d02020;
  color: #000;
  width: 80px;
  height: 80px;
  font-size: 3rem;
  line-height: 80px;
  @media only screen and (min-width: 1200px) {
    width: 120px;
    height: 120px;
    line-height: 120px;
  }
`
const ArrowDownIcon = styled(AiOutlineArrowDown)`
  font-size: 4rem;
  @media only screen and (min-width: 1200px) {
    font-size: 6rem;
  }
  font-weight: 300;
  &:before {
    content: "\f063";
  }
`
const Square1Box = styled.div`
  display: none;
  @media only screen and (min-width: 1200px) {
    display: block;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(144px, 24px);
  }
`
const Square1 = styled.div`
  @media only screen and (min-width: 1200px) {
    // transform: translateY(${props => props.height2}px);
    width: 60px;
    height: 60px;
    background-color: #333;
  }
`
const AboutTitle = styled.div`
  @media only screen and (min-width: 1200px) {
    position: absolute;
    text-align: right;
    left: 25%;
    transform: rotate(-90deg) translateY(-25%);
  }
`
const Title = styled.h2`
  color: #fff;
  font-weight: 700;
  font-size: 3rem;
  @media only screen and (min-width: 1200px) {
    font-size: 7.5rem;
    line-height: 1;
  }
`
const AboutContent = styled.div`
  color: #fff;
  @media only screen and (min-width: 1200px) {
    margin-left: 50%;
    max-width: 25%;
  }
  & .content {
    margin-bottom: 2rem;
  }
  & .btn {
    border-radius: 0;
    padding-left: 2rem;
    padding-right: 2rem;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    background-color: transparent;
    border: 1px solid transparent;
    transition: all 0.5s ease;
    &:hover {
      color: #333;
      background-color: #fff;
      border-color: #fff;
      box-shadow: inset 300px 0 0 0 #fff;
    }
  }
  & .btn-outline-light {
    color: #f8f9fa;
    border-color: #f8f9fa;
    position: relative;
    z-index: 0;
    overflow: hidden;
    border-width: 2px;
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
    }
  }
`
const Square2Box = styled.div`
  display: none;
  @media only screen and (min-width: 1200px) {
    display: block;
    position: absolute;
    left: 50%;
    bottom: 128px;
  }
`
const Square2 = styled.div`
  @media only screen and (min-width: 1200px) {
    width: 60px;
    height: 60px;
    background-color: #333;
  }
`
export default HomeAboutComponent
