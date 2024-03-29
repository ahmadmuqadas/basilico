import React, { useState } from "react";
import styled from "styled-components";
import backgroundImg from "../Media/backgroundone.jpg";
import Wave from "./Wave";
import { Form } from "react-router-dom";
import pinIcon from '../Media/pin.png';
import phoneIcon from '../Media/telephone.png'
import mailIcon from '../Media/mail.png'

const ContactWrapperDiv = styled.div`
  min-height: 120vh;
  background: no-repeat;
  background-size: cover;
  width: 95%;
  margin: auto;
  position: relative;
  color: white;
  font-family: 'Franklin Gothic', 'Arial Narrow', Arial, sans-serif;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0 0 0 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8744310224089635) 0%,
    rgba(0, 0, 0, 0.723170518207283) 100%
  );
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DivOne = styled.div`
  margin-top: 10rem;

  width: 100%;
`;

const Subheader = styled.p`
  padding: 2rem 0;
  text-align: center;
`;

const HeaderText = styled.h4`
  text-align: center;
  font-size: 4rem;
`;

const ContactDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 3rem 2rem;
  flex-direction: column;
  line-height: 3rem;
  @media  (min-width: 800px) {
    flex-direction: row;
  }

  /* padding: 5rem 0; */
`;

const Address = styled.div`
  /* width: 100%; */
  text-align: center;
`;

const Phone = styled.div`
  /* width: 100%; */
  text-align: center;
`;

const Email = styled.div`
  text-align: center;
  /* width: 100%; */
  text-align: center;
`;

const DivThree = styled.div`
  margin-top: 1rem;
  border-radius: 100vmax;
  border: dotted white;
  padding: 3rem 1.2rem;
  transition: ease-in-out 0.1s;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const ContactBtn = styled.button`
  border: none;
  background: none;
  color: white;
  font-size: 0.6rem;
  font-weight: bolder;
`;

const FormDiv = styled.div`
  position: absolute;
  inset: 0 0 0 0;
  background-color: white;
  z-index: 10;
  color: black;
  display: flex;
  justify-content: center;
  display: ${(props) => (props.displayCondtion ? "block" : "none")};
`;

const FormContainer = styled.form`
  width: 90%;
  margin: 4rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;


  @media  (min-width: 500px) {
   width: 50%;
  margin: 4rem auto;
  }
`;

const FormInputForName = styled.input`
  grid-column: 1/2;
  height: 4rem;
  border: none;
  border-bottom: solid black 1px;
`;
const FormInputForEmail = styled.input`
  grid-column: 2/4;
  height: 4rem;
  border: none;
  border-bottom: solid black 1px;
`;
const FormInputsForSubject = styled.input`
  grid-column: 1/4;
  height: 4rem;
  border: none;
  border-bottom: solid black 1px;
`;
const FormInputForMessage = styled.input`
  grid-column: 1/4;
  height: 10rem;
  border: none;
  border-bottom: solid black 1px;
`;
const SubmitButton = styled.button`
  align-self: center;
  grid-column: 2/3;
  background-color: transparent;
  border: solid black 1px;
  cursor: pointer;
`;

const Close = styled.p`
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 0;
  border: solid black 1px;
  padding: 1rem 1.3rem;
  border-radius: 100vmax;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

const IconImg = styled.img`
max-width: 2rem;
  
`

const IconTxt = styled.p`
  
`


const Contact = () => {
  const [toggleForm, setToggleForm] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  }) 
  
  function handleChanges(e) {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }
  function handleFormSubmit(e) {
    e.preventDefault();
alert('Cannot send Message because Free version of Firebase does not allow to create more than one database.')
  }
  

  return (
    <ContactWrapperDiv style={{ backgroundImage: `url(${backgroundImg})` }}>
      <FormDiv displayCondtion={toggleForm}>
        <DivOne>
          <Subheader>07.LET'S TALK</Subheader>
          <HeaderText>Please Write</HeaderText>

          <FormContainer method="post" onSubmit={handleFormSubmit}>
            <FormInputForName placeholder="Enter Your Name" name="name" value={formValues.name} onChange={handleChanges} />
            <FormInputForEmail placeholder="Enter Your Email" name="email" type="email" value={formValues.email} onChange={handleChanges} />
            <FormInputsForSubject placeholder="Enter Your Subject" name="subject" value={formValues.subject} onChange={handleChanges} />
            <FormInputForMessage placeholder="Enter Your Message" name="message" value={formValues.message} onChange={handleChanges} />
            <SubmitButton>Submit</SubmitButton>
          </FormContainer>
        </DivOne>
        <Close
          onClick={() => {
            setToggleForm(false);
          }}
        >
          x
        </Close>
      </FormDiv>
      <Overlay>
        <DivOne>
          <Subheader>07.LET'S TALK</Subheader>
          <HeaderText>The Contact</HeaderText>
        </DivOne>
        <ContactDiv>
          <Address>
            <IconImg src={pinIcon}/>
          <IconTxt>EX INC. TOUCHDOWN DR 1176</IconTxt>
          </Address>
          <Phone>
            <IconImg src={phoneIcon}/>
           <IconTxt>+12799446949</IconTxt> 
            </Phone>
          <Email>
          <IconImg src={mailIcon}/>
           <IconTxt>ahmadmuqadas.98@gmail.com</IconTxt> 
          </Email>
        </ContactDiv>

        <DivThree   onClick={() => {
              setToggleForm(true);
            }}>
          <ContactBtn >
            USE THE FORM
          </ContactBtn>
        </DivThree>
      </Overlay>
      <Wave />
    </ContactWrapperDiv>
  );
};

export default Contact;
