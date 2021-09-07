import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterWrapper>
      <FooterText>
        Challenge by
        <FooterHeading href="https://www.frontendmentor.io/" target="_blank">
          frontendmentor.io
        </FooterHeading>
        <br />
        Created by Mitanshu Vadnagra
      </FooterText>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.div`
  background-color: #1ef16e;
  width: 100%;
  height: 150px;
  position: relative;
`;

const FooterText = styled.h3`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 25%;
  padding: 20px 0;
`;

const FooterHeading = styled.a`
  color: white;
  margin-left: 5px;
  font-weight: 600;
  text-decoration: none;
`;
