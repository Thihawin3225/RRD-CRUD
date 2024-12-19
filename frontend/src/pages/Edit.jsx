import React from "react";
import CreateForm from "../compoment/CreateForm";
import { useRouteLoaderData } from "react-router-dom";
const Edit = () => {
  const post = useRouteLoaderData("post-detail");
  return (
    <div>
      <CreateForm
        header={"Update Your Post"}
        submitBtn={"Update Post"}
        post={post}
        method={"patch"}
      />
    </div>
  );
};

export default Edit;
