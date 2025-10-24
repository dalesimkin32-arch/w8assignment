//  /src/app/posts/[id]/page.js

import AddComment from "@/components/AddComment";
import ShowComments from "@/components/ShowComments";
import pg from "pg";

export default async function Page({ params }) {
  // the dynamic route that will display the post information, and it's comments

  // need the route parameters
  const { id } = await params;
  // specifically: the id in the URL is
  // /posts/1
  // or
  // /posts/2 -> this tells me what post information we're trying to display

  // set up your db connection

  // replace id with $1 (use is correctly)
  // fetch a post by its id `SELECT * FROM posts WHERE id = id`

  return (
    <div>
      <div>{/* display post information */}</div>

      {/* the component needs to know the id of the post it has to fetch comments for */}
      <AddComment id={id} />
      <ShowComments id={id} />
    </div>
  );
}
