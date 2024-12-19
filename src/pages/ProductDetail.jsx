import React, { useId } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import User from "./User";

const ProductDetail = () => {
  const { title, body, id, userId } = useLoaderData();
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <p>{title}</p>
        <p>{body}</p>
        <p>
          <User userId={userId} />
        </p>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home Page
      </button>
    </div>
  );
};

export default ProductDetail;
export const loader = async ({ req, params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  return data;
};
