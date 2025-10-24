//  /src/components/ShowComments.jsx

// display the comments section for blog post
import pg from "pg";
import { db } from "@/utils/utilities.js"; // import db connection
import DeleteCommentButton from "./DeleteCommentButton";

export default function Comments({ id }) {
  // use database to fetch comments based on the post id

  // SELCT * FROM COMMENTS WHERE BLOG id = theiDwePassedIntoTHisComponent

  function handleDelete(idOFComment) {
    "use server";
    // db stuff
    // DELETE * FROM comments where the id = idOfComment

    // revalidate /posts/id
  }
  return (
    <div>
      {
        /* map through the comments once gotten
                // display the comments + delete for each
                
            */
        <DeleteCommentButton
          commentId={comment.id}
          handleDelete={handleDelete}
        />
      }
    </div>
  );
}
