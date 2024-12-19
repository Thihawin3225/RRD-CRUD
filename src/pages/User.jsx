import React, { useEffect, useId, useState } from "react";

const User = ({ userId }) => {
  const [name, setName] = useState("");
  useEffect(() => {
    getUser();
  }, [userId]);
  const getUser = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const data = await response.json();
    setName(data.name);
  };
  return <span>Post by - {name}</span>;
};

export default User;
