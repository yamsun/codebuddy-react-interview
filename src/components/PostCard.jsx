import PropTypes from "prop-types";

const PostCard = ({ post }) => {
  return (
    <div className="post overflow-hidden rounded-lg bg-white shadow-lg">
      <div key={post?.id}>
        <div className="flex items-center gap-2 p-4">
          <img
            src={post.avatar}
            alt={`${post.firstName} ${post.lastName}`}
            className="h-10 w-10 rounded-full p-0.5 ring-2 ring-gray-300 dark:ring-gray-500"
          />
          <h3 className="text-xl font-semibold">
            {post.firstName} {post.lastName}
          </h3>
        </div>
        <div className="flex flex-col items-center gap-2 p-4">
          <img
            src={post.image}
            alt={post.writeup}
            className="h-auto w-full rounded-lg shadow-sm dark:shadow-gray-800"
          />
          <p className="text-lg">{post.writeup}</p>
        </div>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    writeup: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostCard;
