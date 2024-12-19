import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import User from "./User";
const Product = () => {
  const data = useLoaderData();

  return (
    <div>
      {data.map((item) => {
        return (
          <Link to={`/product/${item.id}`} key={item.id}>
            <div className="container">
              <p>{item.title}</p>
              <p>
                <User userId={item.userId} />
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Product;
export const loader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    //code...
  } else {
    const data = await response.json();
    return data;
  }
};
