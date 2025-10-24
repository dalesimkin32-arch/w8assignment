"use client";
// /src/components/DeleteCommentButton.jsx

// this must be a client component on  top line of file
export default function DeleteButton({ commentId, handleDelete }) {
  return (
    <button
      onClick={() => {
        handleDelete(commentId);
      }}
    >
      Remove Comment
    </button>
  );
}
