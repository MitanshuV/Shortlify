import React from "react";
import styled from "styled-components";

function Section() {
  return (
    <SectionContainer>
      <SectionWrapper>
        <SectionHeader>
          More than just <br />
          shorter links
        </SectionHeader>
        <SectionContent>
          build your brand's recognition card and get detailed <br />
          insights on how your links are performing
        </SectionContent>
      </SectionWrapper>
      <SectionImage
        src="images/undraw_Developer_activity_re_39tg (1).png"
        alt="undraw_Developer_activity_re_39tg"
      ></SectionImage>
    </SectionContainer>
  );
}

export default Section;

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 686px) {
    flex-wrap: wrap-reverse;
  }
`;
const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const SectionHeader = styled.h1`
  font-size: 50px;
  @media screen and (max-width: 686px) {
    text-align: center;
    margin-top: 15px;
  }
`;
const SectionContent = styled.p`
  word-wrap: break-word;
  word-break: break-all;
  @media screen and (max-width: 686px) {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;
  }
`;
const SectionImage = styled.img`
  width: 50%;
  height: 100%;
  object-fit: contain;
  @media screen and (max-width: 686px) {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
