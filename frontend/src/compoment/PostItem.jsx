import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  const { id, title, image, date } = post;
  return (
    <section className="post-container">
      <Link to={`${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div className="title-date">
        <Link to={`${id}`}>{title}</Link>
        <p>{date}</p>
      </div>
      <hr className="hr" />
    </section>
  );
};

export default PostItem;
