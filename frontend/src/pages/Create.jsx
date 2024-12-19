import React from "react";
import CreateForm from "../compoment/CreateForm";
import { redirect } from "react-router-dom";
const Create = () => {
  return (
    <CreateForm
      header={"Create New Post"}
      submitBtn={"Add Post"}
      method={"post"}
    />
  );
};

export default Create;
