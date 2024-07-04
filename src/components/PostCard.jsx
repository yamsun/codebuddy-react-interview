import PropTypes from "prop-types";

const PostCard = ({ post }) => {
  return (
    <div>
      <div key={post?.id} className="post">
        <div className="flex items-center gap-2 p-2">
          <img
            src={post.avatar}
            alt={`${post.firstName} ${post.lastName}`}
            width={10}
            height={10}
            className="h-10 w-10 rounded-full p-0.5 ring-2 ring-gray-300 dark:ring-gray-500"
          />
          <h3 className="text-xl">
            {post.firstName} {post.lastName}
          </h3>
        </div>
        <div className="flex flex-col items-center gap-2 p-1">
          <img
            src={post.image}
            alt={post.writeup}
            className="h-auto w-full max-w-96 rounded-lg shadow-md dark:shadow-gray-800"
          />
          <p className="text-lg">{post.writeup}</p>
        </div>
        <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
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
