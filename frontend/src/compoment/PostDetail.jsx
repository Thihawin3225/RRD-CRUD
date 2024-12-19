import React from "react";
import {
  Link,
  redirect,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
const PostDetail = () => {
  const { id, title, image, description, date } =
    useRouteLoaderData("post-detail");
  const submit = useSubmit();
  const deleteHandler = () => {
    const confirmLog = confirm("Are you sure delete Post?");
    if (confirmLog) {
      submit(null, {
        method: "DELETE",
      });
    }
  };
  return (
    <section className="post-detail">
      <div className="theader">
        <div className="title-date">
          <p className="title">{title}</p>
          <p>{date}</p>
        </div>
        <Link to={"/posts"} className="upicon">
          <ArrowUpCircleIcon />
        </Link>
      </div>
      <img src={image} alt={title} />
      <div>{description}</div>
      <p className="btn">
        <button onClick={deleteHandler}>Delete</button>
        <button>
          <Link to={"edit-page"}>Edit</Link>
        </button>
      </p>
    </section>
  );
};

export default PostDetail;
export const loader = async ({ request, params }) => {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`);
  if (!response.ok) {
  } else {
    const data = await response.json();
    return data.post;
  }
};
export const action = async ({ request, params }) => {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`, {
    method: request.method,
  });
  if (!response.ok) {
  } else {
    return redirect("/posts");
  }
};
