import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  console.log({ posts });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://codebuddy.review/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data?.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <p
        className="py-2 text-end text-xl text-blue-700"
        onClick={() => {
          navigate("/");
        }}
      >
        Form
        <div className="inline-flex items-center font-medium text-blue-600 hover:underline dark:text-blue-500">
          <svg
            className="ms-2 h-4 w-4 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </div>
      </p>
      <div className="posts-container">
        {posts.map((item) => (
          <PostCard post={item} key={item?.id} />
        ))}
      </div>
    </>
  );
};

export default Posts;
