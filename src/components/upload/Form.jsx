import { Add } from "@mui/icons-material";
import { Fab, Input } from "@mui/material";
import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import { useAuth } from "../../context/AuthContext";

const SubText = styled.h3`
  font-size: calc(1rem + 1vw);
  color: var(--black2);
`;

const FormDiv = styled.div`
  display: flex;
  justify-contents: center;
  align-items: center;
  flex-direction: column;
`;

const Form = ({ setFiles }) => {
  const { folderName } = useAuth();
  const fileRef = useRef();
  const handleClick = () => {
    fileRef.current.click();
  };

  const handleChange = (e) => {
    setFiles([...e.target.files]);
    fileRef.current.value = null;
  };
  return (
    <form>
      <Input
        type="file"
        inputProps={{ multiple: true }}
        inputRef={fileRef}
        onChange={handleChange}
        sx={{ display: "none" }}
      />
      <FormDiv>
        <SubText>Add images for: {folderName} gallery</SubText>
        <Fab color="primary" aria-label="add" onClick={handleClick}>
          <Add fontSize="large" />
        </Fab>
      </FormDiv>
    </form>
  );
};

export default Form;
