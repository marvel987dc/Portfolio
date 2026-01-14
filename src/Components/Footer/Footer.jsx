import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const FooterWrapper = styled.footer`
  background-color: #052530;
  padding: 60px 20px 30px;
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--gradient-main);
    background-size: 200% 100%;
    animation: ${gradientShift} 3s ease infinite;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FooterTitle = styled.h3`
  font-size: 1.3em;
  color: var(--text-primary);
  margin-bottom: 10px;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 50px;
    height: 2px;
    background: var(--gradient-main);
  }
`;

const FooterText = styled.p`
  color: var(--text-secondary);
  font-size: 0.95em;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: ${(props) => (props.center ? "center" : "flex-start")};

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  font-size: 1.2em;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-decoration: none;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: var(--gradient-main);
    transform: translate(-50%, -50%);
    transition: width 0.3s ease, height 0.3s ease;
  }

  &:hover {
    border-color: transparent;
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 5px 20px rgba(69, 212, 255, 0.4);

    &::before {
      width: 100%;
      height: 100%;
    }
  }

  svg,
  i {
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
  }

  &:hover svg,
  &:hover i {
    transform: rotate(360deg) scale(1.2);
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const QuickLink = styled.a`
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.95em;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 20px;
  display: inline-block;

  &::before {
    content: "→";
    position: absolute;
    left: 0;
    opacity: 0;
    transition: all 0.3s ease;
    color: var(--accent-primary);
  }

  &:hover {
    color: var(--text-primary);
    padding-left: 25px;
    transform: translateX(5px);

    &::before {
      opacity: 1;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-secondary);
  font-size: 0.9em;
  position: relative;
`;

const CopyrightText = styled.p`
  margin-bottom: 10px;
`;

const MadeWith = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 15px;
  color: var(--text-secondary);
  font-size: 0.85em;
`;

const Heart = styled.span`
  color: #e25555;
  animation: ${pulse} 1.5s ease-in-out infinite;
  font-size: 1.2em;
`;

const DecorativeElement = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: var(--gradient-main);
  opacity: 0.05;
  filter: blur(60px);
  animation: ${float} 6s ease-in-out infinite;
  pointer-events: none;

  &:nth-child(1) {
    top: -100px;
    left: -100px;
  }

  &:nth-child(2) {
    bottom: -100px;
    right: -100px;
    animation-delay: -3s;
  }
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <DecorativeElement />
      <DecorativeElement />
      <FooterContent>
        <FooterSection>
          <FooterTitle>About</FooterTitle>
          <FooterText>
            A passionate developer creating innovative solutions and beautiful
            user experiences. Always learning, always building.
          </FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <QuickLinks>
            <QuickLink href="#technologies">Skills</QuickLink>
            <QuickLink href="#projects">Projects</QuickLink>
            <QuickLink href="#about">About</QuickLink>
            <QuickLink href="#contact">Contact</QuickLink>
          </QuickLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Connect</FooterTitle>
          <SocialLinks center>
            <SocialLink
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </SocialLink>
            <SocialLink
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </SocialLink>
            <SocialLink
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </SocialLink>
            <SocialLink href="mailto:your.email@example.com" aria-label="Email">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
              </svg>
            </SocialLink>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <CopyrightText>
          © {currentYear} All rights reserved. Built with passion and
          dedication.
        </CopyrightText>
        <MadeWith>
          Made with <Heart>♥</Heart> using React & Styled Components
        </MadeWith>
      </Copyright>
    </FooterWrapper>
  );
}
