import React from "react";
import { Form, redirect } from "react-router-dom";
import { useActionData } from "react-router-dom";

const CreateForm = ({ header, submitBtn, post, method }) => {
  console.log(method);

  const data = useActionData();
  return (
    <section className="form-container">
      <Form method={method}>
        {data &&
          data.errors &&
          Object.values(data.errors).map((err) => {
            return (
              <ul key={err}>
                <li>{err}</li>
              </ul>
            );
          })}
        <p className="header">{header}</p>
        <div>
          <p>Name</p>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={post ? post.title : ""}
          />
        </div>
        <div>
          <p>mageUrl</p>
          <input
            type="url"
            name="image"
            id="url"
            defaultValue={post ? post.image : ""}
          />
        </div>
        <div>
          <p>Date</p>
          <input type="date" name="date" defaultValue={post ? post.date : ""} />
        </div>
        <div>
          <p>Description</p>
          <textarea
            name="description"
            rows={10}
            defaultValue={post ? post.description : ""}
          ></textarea>
        </div>
        <button>{submitBtn}</button>
      </Form>
    </section>
  );
};

export default CreateForm;
export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const post = {
    title: formData.get("title"),
    image: formData.get("image"),
    date: formData.get("date"),
    description: formData.get("description"),
  };
  const method = request.method;
  let url = "http://localhost:8080/posts";
  if (request.method === "PATCH") {
    url = `http://localhost:8080/posts/${params.id}`;
  }

  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(post),
  });
  if (response.status === 422) {
    return response;
  }
  if (!response.ok) {
  } else {
    return redirect("/posts");
  }
};
