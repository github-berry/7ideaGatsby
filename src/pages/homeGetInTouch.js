import React, { Fragment, useState, useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import styled from "styled-components"
import emailjs from "emailjs-com"

const HomeGetInTouchComponent = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [panelGreen, setPanelGreen] = useState(false)
  const [panelRed, setPanelRed] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)

  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])

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
      <HomeGetInTouch data-aos="fade-up">
        <div className="get-in-touch">
          <div className="section-title">
            <Title>
              Let's
              <br />
              Get in Touch
            </Title>
          </div>
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
                    placeholder="NAME"
                    name="name"
                    defaultValue=""
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <Input
                    type="email"
                    placeholder="EMAIL"
                    name="email"
                    defaultValue=""
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div style={{ marginBottom: "13px" }}>
                  <TextArea
                    placeholder="MESSAGE"
                    rows="5"
                    name="message"
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
        </div>
      </HomeGetInTouch>
    </Fragment>
  )
}
const HomeGetInTouch = styled.div`
  padding: 2rem;
  @media only screen and (min-width: 1200px) {
    padding: 120px;
  }
`
const FieldSet = styled.div`
  padding: 0 0 15px;
  // background:red;
`
const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  @media only screen and (min-width: 1200px) {
    font-size: 7.5rem;
    line-height: 1;
  }
`
const CoverForm = styled.div`
  width: 100%;
  @media only screen and (min-width: 1200px) {
    width: 50%;
  }
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
  &:hover {
    background: #efefef;
    border-color: #cccccc;
    color: #444444;
  }
`
// const FormField = styled.div`
//   margin-bottom: 20px;
// `
// const Input = styled.input`
//   display: block;
//   height: 50px;
//   width: 100%;
//   color: #555;
//   padding: 8px;
//   font-size: 18px;
//   @media (max-width: 1200px) {
//     width: 100%;
//   }
//   border: none;
//   border-bottom: 2px solid silver;
//   &:focus {
//     outline: none;
//     border-bottom: 2px solid #66afe9;
//   }
//   margin-bottom: 25px;
//   ::placeholder {
//     color: #a1a1a1;
//     font-size: 18px;
//   }
// `
// const Textarea = styled.textarea`
//   width: 100%;
//   color: #555;
//   padding: 8px;
//   font-size: 18px;
//   border: none;
//   border-bottom: 2px solid silver;
//   margin-bottom: 10px;
//   @media (max-width: 1200px) {
//     width: 100%;
//   }
//   &:focus {
//     outline: none;
//     border-bottom: 2px solid #66afe9;
//   }
//   ::placeholder {
//     color: #bfc3c8;
//     font-size: 18px;
//   }
// `
// const SendButton = styled.a`
//   width: auto;
//   text-decoration:none;
//   font-family: "Poppins";
//   font-size: 15px;
//   height: auto;
//   line-height: normal;
//   text-align: center;
//   background: #0a0202;
//   border-width: 0px;
//   border-color: #020a08;
//   border-style: solid;
//   color: #ffffff;
//   cursor: pointer;
//   font-weight: normal;
//   border-radius: 0px;
//   text-shadow: none;
//   padding: 10px 20px;
//   box-sizing: border-box;
//   box-shadow: 0 1px 1px #eeeeee;
//   margin: 10px;
//   margin-left: 0;
//   margin-right: 0;
//   vertical-align: middle;
//   &:hover {
//     background: #efefef;
//     border-color: #cccccc;
//     color: #444444;
//   }
// `
export default HomeGetInTouchComponent
