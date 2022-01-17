import React, { Fragment, useState } from "react"
import styled from "styled-components"
import { FaBars, FaTimes } from "react-icons/fa"
import "normalize.css"
const SidebarComponent = () => {
  const [openSidebar, setOpenSidebar] = useState(false)

  const _navItems = [
    { link: "/", name: "Home" },
    { link: "/about", name: "About Us" },
    { link: "/project", name: "Projects" },
    { link: "/client", name: "Clients" },
    { link: "/team", name: "Team." },
    { link: "/contact", name: "Contact Us" },
  ]
  return (
    <Fragment>
      {/* <Open onClick={() => setOpenSidebar(!openSidebar)} active={openSidebar} /> */}
      <ToggleMenu
        onClick={() => setOpenSidebar(!openSidebar)}
        active={openSidebar}
      >
        <i></i>
        <i></i>
        <i></i>
      </ToggleMenu>
      {/* <Close
        onClick={() => setOpenSidebar(!openSidebar)}
        active={openSidebar}
      /> */}
      <Sidebar active={openSidebar}>
        <ul style={{ padding: 0 }}>
          {_navItems.map((nav, i) => {
            return (
              <Li key={i}>
                <A href={nav.link}>{nav.name}</A>
              </Li>
            )
          })}
        </ul>
      </Sidebar>
    </Fragment>
  )
}

const Sidebar = styled.div`
  left: ${props => (props.active ? "0" : "-250px")};
  position: fixed;
  width: 240px;
  height: 100%;
  top: 0;
  background: #d01f20;
  transition: all 0.5s ease;
  @media (min-width: 1199px) {
    display: none;
  }
  z-index: 3;
`

const A = styled.a`
  display: block;
  font: 700 normal 1.5rem "Poppins";
  padding: 8px 32px;
  color: white;
  box-sizing: border-box;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
`

const Li = styled.li`
  list-style: none;
  &:hover ${A} {
    text-decoration: underline;
  }
`
const ToggleMenu = styled.div`
  display: inline-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  width: 80px;
  height: 80px;
  padding: 32px 16px;
  cursor: pointer;
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
  right: 0;
  z-index: 2;
  position: fixed;
  display: none;
  @media (max-width: 1199px) {
    display: inline-block;
  }
  & i {
    &:nth-child(2) {
      margin-top: 4px;
      margin-bottom: 4px;
    }
    display: block;
    width: 32px;
    height: 2px;
    border-radius: 100px;
    background: #fff;

    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    transform-origin: center center;
    margin-left: auto;
    margin-right: auto;
  }
  ${props => !props.active} & i:nth-child(1) {
    transform: rotate(45deg) translate(4px, 2px);
    margin: 0;
    transition-delay: 0.1s;
  }
  ${props => !props.active} & i:nth-child(2) {
    opacity: 0;
    transform: translateX(-10px);
  }
  ${props => !props.active} & i:nth-child(3) {
    transform: rotate(-45deg) translate(4px, -2px);
    margin: 0;
    margin-top: -3px;
    transition-delay: 0.1s;
  }
`
// const I = styled.i`
//   &:not(&:first-child) {
//     margin-top: 4px;
//   }
//   display: block;
//   width: 32px;
//   height: 2px;
//   border-radius: 100px;
//   background: #fff;
//   -webkit-transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
//   transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
//   transform-origin: center center;
//   margin-left: auto;
//   margin-right: auto;

//   & .active {
//     background: red;
//     // &:nth-child(3) {
//     //   transform: rotate(-45deg) translate(4px, -2px);
//     //   margin: 0;
//     //   transition-delay: 0.1s;
//     // }
//   }
// `
// const Open = styled(FaBars)`
//   z-index: ${props => (props.openSidebar ? 0 : 2)};
//   opacity: ${props => (props.active ? 0 : 1)};
//   position: fixed;
//   cursor: pointer;
//   // background: #042331;
//   border-radius: 3px;
//   display: none;
//   right: 40px;
//   top: 20px;
//   font-size: 50px;
//   color: white;
//   padding: 6px 12px;
//   transition: all 0.5s;
//   @media (max-width: 1199px) {
//     display: inline-block;
//   }
// `
// const Close = styled(FaTimes)`
//   z-index: ${props => (props.openSidebar ? 0 : 2)};
//   opacity: ${props => (props.active ? 1 : 0)};
//   position: fixed;
//   cursor: pointer;
//   // background: #042331;
//   border-radius: 3px;
//   display: none;
//   right: 40px;
//   top: 20px;
//   font-size: 50px;
//   color: white;
//   padding: 8px 10px;
//   transition: all 0.5s ease;
//   @media (max-width: 1199px) {
//     display: inline-block;
//   }
// `

export default SidebarComponent
