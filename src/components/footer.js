import React, { Fragment, useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import styled from "styled-components"
import { Row, Col } from "react-bootstrap"

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <Fragment>
      <MainFooter data-aos="fade-up">
        <div className="row">
          <div className="col-md-4 md-3" style={{ marginBottom: "1rem" }}>
            <div className="footer-logo">
              <a href="#">
                <Image src="/logo-white.png" />
              </a>
            </div>
          </div>
          <div
            className="col-md-4 md-3"
            style={{ marginBottom: "1rem", padding: "0 14px" }}
          >
            <div className="footer-nav">
              <FooterMenu>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About Us.</a>
                </li>
                <li>
                  <a href="/project">Projects.</a>
                </li>
                <li>
                  <a href="/client">Clients.</a>
                </li>
                <li>
                  <a href="/team">Team.</a>
                </li>
                <li>
                  <a href="/contact">Contact Us.</a>
                </li>
              </FooterMenu>
            </div>
          </div>
          <div
            className="col-md-4 md-3"
            style={{ marginBottom: "1rem", padding: "0 16px" }}
          >
            <div className="footer-content">
              7 idea is a new startup company that offers IT solutions and
              online marketing. We are trying to build a bigger team to answer
              our business needs. As we are growing we are looking for people to
              join us and build up our team and culture. Our service offers a
              new cutting edge technology and we are able to move quickly to
              catch up with the new technology.
            </div>
          </div>
        </div>
        <CopyRight>© 2020 7idea. All Rights Reserved</CopyRight>
      </MainFooter>
    </Fragment>
  )
}
const MainFooter = styled.div`
  background-color: #000;
  color: #fff;
  padding: 2rem;
  overflow: hidden;
  @media only screen and (min-width: 1200px) {
    padding: 240px 120px 0;
  }
`
const Image = styled.img`
  max-width: 180px;
  height: auto;
  vertical-align: middle;
  border-style: none;
`
const FooterMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  & li {
    display: list-item;
    text-align: -webkit-match-parent;
  }
  & li a {
    text-decoration: none;
    background-color: transparent;
    color: #fff;
    font: 400 normal 1rem/2 "Poppins";
  }
`
const CopyRight = styled.div`
  text-align: center;
  margin-top: 64px;
  @media only screen and (min-width: 1200px) {
    margin-top: 120px;
    padding-bottom: 120px;
  }
`
export default Footer
