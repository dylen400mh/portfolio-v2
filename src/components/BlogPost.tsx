import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Post } from "../types/Post";
import { Comment } from "../types/Comment";
import { User } from "../types/User";
import Header from "./Header";
import { useAuth } from "../contexts/AuthContext";
import CommentForm from "./CommentForm";

const BlogPost: React.FC = () => {
  const [post, setPost] = useState<Post | undefined>(undefined);
  const [comments, setComments] = useState<Comment[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>("");
  const [loadingPost, setLoadingPost] = useState<boolean>(true);
  const [loadingComments, setLoadingComments] = useState<boolean>(true);
  const { id } = useParams();
  const { validateToken, isAuthenticated } = useAuth();

  useEffect(() => {
    validateToken();
    const fetchPostAndComments = async () => {
      try {
        const postResponse = fetch(
          `${process.env.REACT_APP_BASE_URL}/posts/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const commentsResponse = fetch(
          `${process.env.REACT_APP_BASE_URL}/posts/${id}/comments`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const [postRes, commentsRes] = await Promise.all([
          postResponse,
          commentsResponse,
        ]);

        if (postRes.ok) {
          const postData = await postRes.json();
          setPost(postData.post);
        } else if (postRes.status === 404) {
          throw new Error("Post not found");
        } else if (postRes.status === 401) {
          throw new Error(`Error ${postRes.status}: Unauthorized`);
        }

        if (commentsRes.ok) {
          const commentsData = await commentsRes.json();
          setComments(commentsData.comments);

          const userIds = commentsData.comments.map(
            (comment: Comment) => comment.userId
          );
          fetchUsers(userIds);
        } else if (commentsRes.status === 404) {
          throw new Error("Comments not found");
        } else if (commentsRes.status === 401) {
          throw new Error(`Error ${commentsRes.status}: Unauthorized`);
        }

        setError("");
      } catch (err: any) {
        setError(
          err.message || "An error occurred while fetching post and comments"
        );
      } finally {
        setLoadingPost(false);
        setLoadingComments(false);
      }
    };

    const fetchUsers = async (userIds: number[]) => {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/users?ids=${userIds.join(",")}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setUsers(data.users);
      } else if (response.status === 401) {
        throw new Error(`Error ${response.status}: Unauthorized`);
      }
    };

    fetchPostAndComments();
  }, [id]);

  return (
    <div>
      <Header />

      <div className="min-h-screen bg-[#1a1a1a] text-white py-12 px-6">
        <Link
          to="/blog"
          className="inline-block mb-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-colors duration-300"
        >
          &larr; Back to Blog
        </Link>
        {loadingPost ? (
          <p className="text-center">Loading post...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : post ? (
          <div className="max-w-4xl mx-auto">
            {/* Post content */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              <p className="text-gray-400 mb-4">
                Published: {new Date(post.createdAt).toLocaleString()}
              </p>
              <p className="text-gray-400 mb-4">
                Last Edited: {new Date(post.updatedAt).toLocaleString()}
              </p>
              <div className="text-lg mb-6">{post.content}</div>
            </div>

            {/* Comments Section */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold mb-6">Comments</h2>
              {loadingComments ? (
                <p className="text-center">Loading comments...</p>
              ) : comments.length === 0 ? (
                <p className="text-center">No comments available</p>
              ) : (
                <div className="space-y-6">
                  {comments.map((comment) => {
                    const user = users.find((u) => u.id === comment.userId);
                    return (
                      <div
                        key={comment.id}
                        className="bg-gray-800 p-4 rounded-lg shadow-md"
                      >
                        <p className="text-lg font-semibold mb-2">
                          {user && user.username}
                        </p>
                        <p className="text-gray-300">{comment.content}</p>
                        <p className="text-gray-500 text-sm mt-2">
                          {new Date(comment.createdAt).toLocaleString()}
                        </p>
                        {comment.createdAt !== comment.updatedAt && (
                          <p className="text-gray-500 text-sm mt-2">
                            Last Edited:{" "}
                            {new Date(comment.updatedAt).toLocaleString()}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            {isAuthenticated ? (
              <CommentForm comments={comments} setComments={setComments} />
            ) : (
              <div className="mt-6 text-center">
                <p className="text-gray-400">
                  <Link
                    to="/login"
                    className="text-blue-500 hover:text-blue-400 underline"
                  >
                    Login
                  </Link>{" "}
                  to make a comment
                </p>
              </div>
            )}
          </div>
        ) : (
          <p className="text-center">Post not found</p>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
