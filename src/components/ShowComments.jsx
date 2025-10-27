//  /src/components/ShowComments.jsx

// display the comments section for blog post
import pg from "pg";
import { db } from "@/utils/utilities.js"; // import db connection
import DeleteCommentButton from "./DeleteCommentButton";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function ShowComments({ id }) {
  // use database to fetch comments based on the post id

  // SELECT * FROM COMMENTS WHERE BLOG id = theiDwePassedIntoTHisComponent

  const cRes = await db.query(
    "SELECT * FROM m8_blog_comments WHERE post_id = $1",
    [id]
  );
  const comments = cRes.rows;

  async function handleDelete(idOfComment) {
    "use server";
    // db stuff - imported above
    // DELETE * FROM comments where the id = idOfComment
    const del = await db.query("DELETE * FROM m8_blog_comments WHERE id = $1", [
      idOfComment,
    ]);
    // revalidate /posts/id
    revalidatePath(`/posts/${id}`);
    // redirect not sure if needed as well
    redirect(`/posts/${id}`);
  }

  return (
    <>
      <h2 className="bg-green-800 border-4 border-white rounded-xl p-4 text-white text-3xl font-bold m-4">
        Comments on above post <br />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* map through the comments once gotten */}
        {comments.map((comment) => (
          <div key={comment.id}>
            <div className="bg-green-800 border-4 border-white rounded-xl p-4">
              <h3 className="text-white text-3xl font-bold">
                From: {comment.username}
              </h3>
              <p className="text-white text-lg mt-2">{comment.comment}</p>
            </div>
            <DeleteCommentButton
              commentId={comment.id}
              handleDelete={handleDelete}
            />
          </div>
        ))}
        ;
      </div>
    </>
  );
}
