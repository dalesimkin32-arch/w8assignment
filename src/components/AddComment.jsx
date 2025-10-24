// /src/components/AddComment.jsx

export default function AddComment({ id }) {
  // import pg and all the settting up ect.
  async function handleSubmit(formData) {
    "use server";
    // do our database stuff in here on submti

    // the formData is passsed automatically the the handlesubmit on submission
    // INSER INTO COMMENTS WHERE POST = 1 (just an example)
    // maybe revalidate?
  }
  return (
    <div>
      <form action={handleSubmit}>
        {/* inputs - remember to give them a name prop */}
      </form>
    </div>
  );
}
