import React, { useState, useEffect, Fragment } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "normalize.css"

const NavbarComponent = () => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    window.onscroll = () => scrollFunction()
    const scrollFunction = () => {
      if (document.documentElement.scrollTop > 20) {
        setActive(true)
      } else {
        setActive(false)
      }
    }
  }, [])

  const _navItems = [
    { link: "/", name: "HOME" },
    { link: "/about", name: "ABOUT US" },
    { link: "/project", name: "PROJECTS" },
    { link: "/client", name: "CLIENTS" },
    { link: "/team", name: "TEAM" },
    { link: "/contact", name: "CONTACT US" },
  ]
  return (
    <Fragment>
      <MainHeader active={active} className="main-header">
        <MainLogo>
          <a href="/" className="custom-logo-link">
            <img
              className="custom-logo"
              src="https://7idea.com/wp-content/uploads/2021/08/logo-white.png"
              alt="logo"
            />
          </a>
        </MainLogo>
        <MainNav>
          <ul className="main-menu">
            {_navItems.map((nav, i) => {
              return (
                <li key={i} className="menu-item">
                  <a href={nav.link}>{nav.name}</a>
                </li>
              )
            })}
          </ul>
        </MainNav>
        <GetInTouch to="/contact">Get In Touch</GetInTouch>
      </MainHeader>
    </Fragment>
  )
}
const MainHeader = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: solid 1px rgba(255, 255, 255, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  @media only screen and (min-width:1200px){
    z-index: 3;
  }
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
  display: block;
  box-sizing: border-box;
  background-color: ${props => props.active && `rgba(0, 0, 0, 0.8)`};
  @media only screen and (min-width: 1200px) {
    height: 120px;
  }
`
const MainLogo = styled.div`
  width: 80px;
  height: 80px;
  background-color: #d02020;
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;
  & a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
  }
  & img {
    max-width: 100%;
    height: auto;
  }
  @media only screen and (min-width: 1200px) {
    width: 120px;
    height: 120px;
  }
`
const MainNav = styled.div`
  box-sizing: border-box;
  display: none;
  margin-left: 25%;
  & .main-menu {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 120px;
  }
  & .menu-item {
    list-style: none;
    display: list-item;
    text-align: -webkit-match-parent;
  }
  & a {
    font: 400 normal 1rem/120px "Poppins";
    color: #fff;
    padding: 64px 64px 64px 0px;
    text-transform: uppercase;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      color: #fff;
    }
  }
  @media only screen and (min-width: 1200px) {
    display: block;
  }
`
const GetInTouch = styled(Link)`
  padding: 0 4rem;
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #d02020;
  color: #fff;
  font: 700 normal 1.5rem/120px "Poppins";
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #fff;
  }
  @media only screen and (min-width: 1200px) {
    display: block;
  }
`
export default NavbarComponent
