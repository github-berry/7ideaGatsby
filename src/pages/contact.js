import React, { Fragment, useState, useEffect } from "react"
import styled from "styled-components"
import { Container } from "react-bootstrap"
import NavbarComponent from "../components/Navbar"
import SidebarComponent from "../components/Sidebar"
import FooterComponent from "../components/footer"
import emailjs from "emailjs-com"

const AboutPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [panelGreen, setPanelGreen] = useState(false)
  const [panelRed, setPanelRed] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)

  useEffect(() => {
    if (window.sessionStorage.getItem("panelRed")) {
      setPanelGreen(false)
      setPanelRed(true)
    }
  }, [])

  const sendEmail = e => {
    e.preventDefault()
    if (name && email && message) {
      emailjs
        .sendForm(
          "service_xs4m3m3",
          "template_51zh96s",
          e.target,
          "user_uDbimTdCIgR3lLIX2aNIf"
        )
        .then(
          result => {
            console.log(result.text)
          },
          error => {
            console.log(error.text)
          }
        )
      e.target.reset()
    }
    window.sessionStorage.setItem("panelRed", true)
    setPanelGreen(true)
  }

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
          <Title>Contact Us</Title>
        </CustomContainer>
      </PageTitle>
      <ContentArea>
        <CustomContainer>
          {panelGreen && (
            <Panel bg="#deefd8" title="#519051">
              <p className="title">
                Your responses were successfully submitted. Thank you!
              </p>
            </Panel>
          )}
          {panelRed && (
            <Panel bg="#F3DEDD" title="#B94A48">
              <p className="title">
                Your responses were successfully submitted. Thank you!
              </p>
            </Panel>
          )}
          {errorEmail && (
            <Panel bg="#F3DEDD" title="#B94A48">
              <p className="title">
                There was a problem with your submission. Errors are marked
                below.
              </p>
            </Panel>
          )}
          {!panelGreen && !panelRed && (
            <CoverForm>
              <form onSubmit={sendEmail}>
                <div style={{ marginBottom: "20px" }}>
                  <Input
                    type="text"
                    name="name"
                    placeholder="NAME"
                    defaultValue=""
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <Input
                    type="email"
                    name="email"
                    placeholder="EMAIL"
                    defaultValue=""
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div style={{ marginBottom: "13px" }}>
                  <TextArea
                    name="message"
                    placeholder="MESSAGE"
                    rows="5"
                    defaultValue=""
                    onChange={e => setMessage(e.target.value)}
                  ></TextArea>
                </div>
                <div className="frm_submit">
                  <SendButton>SEND</SendButton>
                </div>
              </form>
            </CoverForm>
          )}
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
const CoverForm = styled.div`
  // background: pink;
  // padding: 5px;
`
const Input = styled.input`
  width: 100%;
  max-width: 100%;
  height: 48px;
  line-height: 1.3;
  color: #555;
  background-color: #fff;
  border-color: #bfc3c8;
  font-size: 18px;
  padding: 8px;

  margin-top: 3px;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid silver;
  &:focus {
    outline: none;
    border-bottom: 2px solid #66afe9;
  }
  ::placeholder {
    color: #a1a1a1;
    font-size: 18px;
  }
`
const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  padding-bottom: 23px;
  margin-top: 3px;
  border: none;
  border-bottom: 2px solid silver;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-bottom: 2px solid #66afe9;
  }
  ::placeholder {
    color: #a1a1a1;
    font-size: 18px;
  }
`
const Panel = styled.div`
  font-size: 14px;
  padding: 15px;
  margin: 5px 0 15px;
  border: 1px solid ${props => props.bg};
  background-color: ${props => props.bg};
  & .title {
    color: ${props => props.title};
    margin: 0 0 5px;
  }
`
// const SendButton = styled.div`
//   background: #0a0202;
//   color: #fff;
//   display: inline-block;
//   padding: 10px 20px;
//   font-family: "Poppins";
//   font-size: 15px;
//   cursor: pointer;
//   &:hover {
//     background: #efefef;
//     color: #444;
//   }
// `

const SendButton = styled.button`
  width: auto;
  font-family: "Poppins";
  font-size: 15px;
  height: auto;
  line-height: normal;
  text-align: center;
  background: #0a0202;
  border-width: 0px;
  border-color: #020a08;
  border-style: solid;
  color: #ffffff;
  cursor: pointer;
  font-weight: normal;
  border-radius: 0px;
  text-shadow: none;
  padding: 10px 20px;
  box-sizing: border-box;
  box-shadow: 0 1px 1px #eeeeee;
  margin-top: 10px;
  margin-bottom: 25px;
  margin-left: 0;
  margin-right: 0;
  vertical-align: middle;
`
export default AboutPage
