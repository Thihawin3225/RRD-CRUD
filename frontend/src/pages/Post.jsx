import { useLoaderData } from "react-router-dom";
import PostItem from "../compoment/PostItem";

const Post = () => {
  const posts = useLoaderData();

  return (
    <div>
      {posts.map((post, index) => {
        return (
          <div key={index}>
            <PostItem post={post} key={post.id} />
          </div>
        );
      })}
    </div>
  );
};

export default Post;
export const loader = async () => {
  const response = await fetch("http://localhost:8080/posts");
  const data = await response.json();
  return data.posts;
};
