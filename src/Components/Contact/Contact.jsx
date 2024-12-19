import styled from "styled-components";
import "./Contact.css";

export default function Contact() {
  const ContactSection = styled.section`
    padding: 2rem 0;
    text-align: center;
    background-color: #0f1624;
  `;

  const ContactTitle = styled.h2`
    font-size: 2rem;
    margin-bottom: 2rem;
    color: white;
  `;

  const ContactDescription = styled.p`
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto 2rem;
    color: white;
  `;

  const ContactButton = styled.a`
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color:rgb(255, 255, 255);
    color: #000000;
    text-decoration: none;
    border-radius: 4px;
    font-size: 1rem;
    margin-left: 20px;
  `;

  return (
    <div>
      <ContactSection id="contact">
        <ContactTitle>Contact Me</ContactTitle>
        <ContactDescription>
          Do you want to discuss or know something about me? Feel welcome to
          send me a message!!{" "}
        </ContactDescription>
        <ContactButton className="ContactB" href="mailto:juanbarrero2005@hotmail.com">
        Hotmail
        </ContactButton>
        <ContactButton className="ContactB2" href=" https://wa.me/14379923653">Whatsapp</ContactButton>
      </ContactSection>
    </div>
  );
}
