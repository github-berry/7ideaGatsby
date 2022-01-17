import React, { Fragment } from "react"
import { ParallaxProvider } from "react-scroll-parallax"
import HomeMainComponent from "./homeMain"
import HomeAboutComponent from "./homeAbout"
import HomeClientComponent from "./homeClient"
import HomeTeamComponent from "./homeTeam"
import HomeProjectComponent from "./homeProject"
import HomeGetInTouchComponent from "./homeGetInTouch"
import Footer from "../components/footer"
import NavbarComponent from "../components/Navbar"
import SidebarComponent from "../components/Sidebar"
import "aos/dist/aos.css"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/css/main.css"
export default function Home() {
  return (
    <Fragment>
      <Cover>
        <NavbarComponent />
        <SidebarComponent />
        <ParallaxProvider>
          <HomeMainComponent />
          <HomeAboutComponent />
        </ParallaxProvider>
        <HomeClientComponent />
        <HomeTeamComponent />
        <HomeProjectComponent />
        <HomeGetInTouchComponent />
        <Footer />
      </Cover>
    </Fragment>
  )
}

const Cover = styled.div`
  background: #fff;
`
