import React, { useState } from "react";
import styled from "styled-components";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Wrapper>
        <WrapperHeader>ShortlifyLink</WrapperHeader>
        <WrapperButton onClick={() => setOpen(true)}>help</WrapperButton>
      </Wrapper>

      {open && (
        <WrapperModal>
          <WrapperIcon onClick={() => setOpen(false)}>✖</WrapperIcon>

          <WrapperDetails>
            <WrapperText>How it works.</WrapperText>
            <WrapperList>Enter any link</WrapperList>
            <WrapperList>
              eg: https://www.frontendmentor.io/challenges
            </WrapperList>
            <WrapperList>short link eg: https://shrtco.de/1yHDm</WrapperList>
          </WrapperDetails>
        </WrapperModal>
      )}
    </>
  );
}

export default Header;

const Wrapper = styled.div`
  height: 50px;
  background-color: #1ef16e;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top: 0;
`;

const WrapperHeader = styled.h1`
  padding-left: 20px;
`;

const WrapperButton = styled.button`
  padding: 8px 15px;
  border-radius: 20px;
  border: none;
  outline: none;
  font-size: 16px;
  text-transform: capitalize;
  cursor: pointer;
`;

const WrapperModal = styled.div`
  background: #1ef16e;
  width: 300px;
  height: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

const WrapperIcon = styled.span`
  position: absolute;
  padding: 5px 15px;
  right: 0;
  font-size: 1.5rem;
  transition: all 0.2s ease-out;
  &:hover {
    background-color: #2f2e41;
    color: white;
    cursor: pointer;
  }
`;

const WrapperDetails = styled.ul`
  position: absolute;
  left: 10%;
  top: 15%;
`;
const WrapperList = styled.li`
  margin-top: 20px;
  word-wrap: break-word;
  word-break: break-all;
`;
const WrapperText = styled.h1``;
