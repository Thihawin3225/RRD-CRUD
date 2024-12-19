import React from "react";
import { useLoaderData } from "react-router-dom";

const UserApi = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      {users.map((user) => {
        return (
          <h4>
            User Id {user.id} : {user.name}
          </h4>
        );
      })}
    </div>
  );
};

export default UserApi;

export const loader = async (req, params) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const data = await response.json();
  return data;
};
