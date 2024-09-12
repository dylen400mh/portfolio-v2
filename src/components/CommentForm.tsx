import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Comment } from "../types/Comment";
import { useAuth } from "../contexts/AuthContext";

interface CommentFormProps {
  comments: Comment[];
  setComments: (comments: Comment[]) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ comments, setComments }) => {
  const [newComment, setNewComment] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { id } = useParams();
  const { user } = useAuth();

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/posts/${id}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ content: newComment }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setComments([...comments, data.comment]);
        setNewComment("");
      } else {
        setError("Failed to post comment. Please try again.");
      }
    } catch (error) {
      setError("Failed to post comment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="mt-8">
      <form onSubmit={handleCommentSubmit} className="space-y-4">
        <label htmlFor="newComment" className="block text-lg">
          {`Add a comment as ${user?.username}`}
        </label>
        <textarea
          id="newComment"
          name="newComment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-3 border rounded-md bg-gray-700 border-gray-600 text-white h-28"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Posting..." : "Post Comment"}
        </button>
        <p className="text-center text-red-500">{error}</p>
      </form>
    </div>
  );
};

export default CommentForm;
