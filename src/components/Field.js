import React, { useState } from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Field() {
  const [input, setInput] = useState("");
  const [shortLink, setShortLink] = useState("");
  const [uploading, setUploading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const link = `https://api.shrtco.de/v2/shorten?url=${input}/`;

  const handleChange = () => {
    setIsCopied(true);
    if (isCopied === true) {
      alert("Your short link is copied ✔");
    }
  };
  const onCopyText = () => {
    setIsCopied(true);
  };
  const getLinkData = async () => {
    try {
      setUploading(true);
      const data = await fetch(link);
      const response = await data.json();
      setShortLink(response.result.full_short_link);
      setUploading(false);
    } catch (error) {
      alert("You haven't entered any link ");
      setUploading(false);
    }
  };
  const handleSubmit = (e) => {
    getLinkData();
    setInput("");
  };
  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <FiledWrapper>
      <FiledForm onSubmit={handleForm}>
        <FieldInput
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter link"
        />
        <FiledButton type="submit" onClick={handleSubmit}>
          get link
        </FiledButton>
      </FiledForm>
      <br />

      <FieldData>
        <FieldSpan>Short link is:</FieldSpan>
        <FieldLink href={shortLink} target="_blank" rel="noreferrer">
          {uploading ? (
            <FieldGeneratingLink>Generating your link ...</FieldGeneratingLink>
          ) : (
            shortLink
          )}
        </FieldLink>
        <CopyToClipboard text={shortLink} onCopy={onCopyText}>
          <FiledIcon onClick={handleChange}>🔗</FiledIcon>
        </CopyToClipboard>
      </FieldData>
    </FiledWrapper>
  );
}

export default Field;

const FiledWrapper = styled.div`
  background-color: #3f3d56;
  margin-top: 20px;
  height: 220px;
  position: relative;
`;
const FiledForm = styled.form`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
`;
const FieldInput = styled.input`
  width: 70%;
  margin: 0 auto;
  flex: 1;
  font-size: 18px;
  height: 50px;
  padding-left: 20px;
  border: none;
  outline: none;
  color: #757575;
`;
const FiledButton = styled.button`
  border: none;
  outline: none;
  margin-left: 5px;
  height: 50px;
  width: 80px;
  font-size: 18px;
  text-transform: capitalize;
  cursor: pointer;
  background: #000;
  color: white;
  font-weight: 600;
`;
const FieldData = styled.div`
  height: 50px;
  background: black;
  display: flex;
  flex: 1;
  align-items: center;
  width: 80%;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, 0%);
  margin: 10px 0px;
  @media screen and (max-width: 686px) {
    width: 98%;
  }
`;
const FieldLink = styled.a`
  color: white;
  font-weight: 600;
  font-size: 18px;
  margin-left: 20px;
`;

const FieldSpan = styled.span`
  color: white;
  font-weight: 600;
  font-size: 18px;
  margin-left: 20px;
  @media screen and (max-width: 686px) {
    display: none;
  }
`;

const FiledIcon = styled.span`
  background-color: #1ef16e;
  position: absolute;
  right: 0px;
  padding: 8px;
  top: 0;
  bottom: 0;
  font-size: 25px;
  cursor: pointer;
`;

const FieldGeneratingLink = styled.p`
  position: absolute;
  color: white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 22px;
  font-weight: bold;
`;
