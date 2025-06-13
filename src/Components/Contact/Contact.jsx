import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  text-align: center;
  background-color: #0f1624;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      #13adc7,
      #6978d1,
      #945dd6,
      transparent
    );
  }
`;

const ContactTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 2rem;
  color: white;
  position: relative;
  animation: ${fadeIn} 0.8s ease-out;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #13adc7, #6978d1, #945dd6);
    border-radius: 2px;
  }
`;

const ContactDescription = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 3rem;
  color: white;
  line-height: 1.8;
  animation: ${fadeIn} 0.8s ease-out 0.2s backwards;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 500px;
  animation: ${fadeIn} 0.8s ease-out 0.4s backwards;
`;

const Input = styled.input`
  padding: 15px;
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #13adc7;
    background: rgba(255, 255, 255, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const TextArea = styled.textarea`
  padding: 15px;
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #13adc7;
    background: rgba(255, 255, 255, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const SubmitButton = styled.button`
  padding: 15px 30px;
  border: none;
  border-radius: 30px;
  background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(19, 173, 199, 0.3);
  }

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const StatusMessage = styled.div`
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  animation: ${fadeIn} 0.3s ease-out;
  background: ${(props) =>
    props.success ? "rgba(46, 213, 115, 0.2)" : "rgba(255, 71, 87, 0.2)"};
  border: 1px solid
    ${(props) =>
      props.success ? "rgba(46, 213, 115, 0.3)" : "rgba(255, 71, 87, 0.3)"};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
  animation: ${fadeIn} 0.8s ease-out 0.6s backwards;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    color: #13adc7;
  }
`;

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState({ message: "", success: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: "", success: false });

    emailjs
      .sendForm(
        "service_x7wnqnm", // Replace with your EmailJS service ID
        "template_rltw72t", // Replace with your EmailJS template ID
        form.current,
        "SSUSNZ9dSbs3i7ZDY" // Replace with your EmailJS public key
      )
      .then((result) => {
        setStatus({
          message: "Message sent successfully! I will get back to you soon.",
          success: true,
        });
        form.current.reset();
      })
      .catch((error) => {
        setStatus({
          message: "Failed to send message. Please try again later.",
          success: false,
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <ContactSection id="contact">
      <ContactTitle>Get In Touch</ContactTitle>
      <ContactDescription>
        Have a question or want to work together? Feel free to send me a
        message! I&apos;m always open to new opportunities and interesting
        conversations.
      </ContactDescription>

      <Form ref={form} onSubmit={sendEmail}>
        <Input type="text" name="user_name" placeholder="Your Name" required />
        <Input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />
        <Input type="text" name="subject" placeholder="Subject" required />
        <TextArea name="message" placeholder="Your Message" required />
        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </SubmitButton>
      </Form>

      {status.message && (
        <StatusMessage success={status.success}>{status.message}</StatusMessage>
      )}

      <SocialLinks>
        <SocialLink
          href="https://github.com/marvel987dc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </SocialLink>
        <SocialLink
          href="https://linkedin.com/in/juan-barrero-66b407290"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </SocialLink>
      </SocialLinks>
    </ContactSection>
  );
}
