import { useEffect, useState } from "react";
import { Post } from "../types/Post";
import { Link } from "react-router-dom";
import Header from "./Header";
import { useAuth } from "../contexts/AuthContext";
import Footer from "./Footer";

const Blog = () => {
  const [error, setError] = useState<string>("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { validateToken, user } = useAuth();

  useEffect(() => {
    validateToken();
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/posts/published`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error ${response.status}: Failed to fetch posts`);
        }

        const data = await response.json();

        setPosts(data.posts || []);
        setError("");
      } catch (err: any) {
        setError(err.message || "An error occurred while fetching posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [validateToken]);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Header />
      <div className=" max-w-7xl mx-auto py-12 px-6">
        {user && (
          <h2 className="text-2xl font-semibold mb-4">Hi, {user.username}</h2>
        )}
        <h2 className="text-4xl font-bold mb-8 text-center">Blog Posts</h2>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : posts.length === 0 ? (
          <p className="text-center">No posts available</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                state={post}
                className="block p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-400">
                  {new Date(post.createdAt).toLocaleString()}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
