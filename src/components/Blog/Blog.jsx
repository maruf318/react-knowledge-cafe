import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
// import { BsBookmarkStar } from "react-icons/Bs";
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover_image,
    hashtags,
    author_img,
    posted_date,
    author,
    reading_time,
  } = blog;
  return (
    <div className="mb-20 space-y-4">
      <img
        className="w-full mb-8 h-[400px]"
        src={cover_image}
        alt={`cover pic of the title ${title}`}
      />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="w-14 rounded-full" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time}min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 text-xl text-red-400"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, index) => (
          <span key={index}>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time, id)}
        className="text-purple-400 underline font-bold"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};
export default Blog;
