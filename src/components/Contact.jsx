import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactimg from "../img/contactimg.svg"
import React from 'react'
import emailjs from '@emailjs/browser'


function Contact() {
    const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs.send(
      "service_fwwshsl",
      "template_swjw8d5",
      {
        from_name: `${formDetails.firstName} ${formDetails.lastName}`,
        to_name: "Aaron Lee",
        from_email: formDetails.email,
        to_email: "aaronlee97667@gmail.com",
        message: formDetails.message
      },
      'vztP_uDMW7yJvbdeP'
    )
    .then(() => {
      setButtonText("Sending...");
      alert('Thank you, I will get back to you as soon as possible!')
      setFormDetails(formInitialDetails)
      setButtonText("Send");
    }, (error) => {
      console.log(error);
      alert('Something went wrong!')
    })
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
                <img src={contactimg} alt="Contact Us"/>
          </Col>
          <Col size={12} md={6}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
