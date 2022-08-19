import React from "react";
import Form from "./Form";
import ProgressList from "./progressList/ProgressList";
import { useState } from "react";

const Upload = () => {
  const [files, setFiles] = useState([]);

  return (
    <>
      <Form setFiles={setFiles} />
      <ProgressList files={files} />
    </>
  );
};

export default Upload;
