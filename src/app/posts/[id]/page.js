//  /src/app/posts/[id]/page.js

import AddComment from "@/components/AddComment";
import ShowComments from "@/components/ShowComments";
import NavBar from "@/components/NavBar";
import pg from "pg";
import { db } from "@/utils/utilities.js"; // import db connection

export default async function Page({ params }) {
  // the dynamic route that will display the post information, and it's comments

  // need the route parameters
  const { id } = await params;
  // specifically: the id in the URL is
  // /posts/1
  // or
  // /posts/2 -> this tells me what post information we're trying to display

  // set up your db connection - done in import above

  // replace id with $1 (use is correctly)
  // fetch a post by its id `SELECT * FROM posts WHERE id = id`
  const res = await db.query(`SELECT * FROM m8_blog_posts WHERE id = $1`, [id]);
  const post = res.rows[0];

  return (
    <>
      <NavBar />
      <div className="bg-gray-800 opacity-80">
        <div className="container mx-auto p-4">
          {/* post and "add comment" form next to each other */}
          {/* display post information */}
          <div className="bg-blue-800 border-4 border-white rounded-xl p-8">
            <h2 className="text-white text-3xl font-bold">
              {post.title} <br />
              ...By {post.username}
            </h2>
            <p className="text-white text-lg mt-2">{post.content}</p>
          </div>

          {/* the component needs to know the id of the post it has to fetch comments for */}
          <AddComment id={id} />
        </div>
        <div className="container mx-auto p-4">
          {/* comments below post + "add comment" form */}
          <ShowComments id={id} />
        </div>
      </div>
    </>
  );
}
