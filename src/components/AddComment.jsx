// /src/components/AddComment.jsx

export default function AddComment({ id }) {
  // import pg and all the settting up ect.
  async function handleSubmit(formData) {
    "use server";
    // do our database stuff in here on submti

    // the formData is passsed automatically the the handlesubmit on submission
    // INSERT INTO COMMENTS WHERE POST = 1 (just an example)
    // maybe revalidate?
  }
  return (
    <div className="container mx-auto p-4">
      <form
        action={handleSubmit}
        className="bg-green-800 border-4 border-white rounded-xl p-8"
      >
        {/* inputs - remember to give them a name prop */}
        <input
          name="username"
          placeholder="username"
          required
          className="bg-green-400 text-white text-2xl font-bold"
        />
        <input
          type="text box"
          name="comment"
          placeholder="Comment Here..."
          required
          className="bg-green-400 text-white text-2xl font-bold"
        />
        <button type="submit" className="m-4">
          Submit
        </button>
      </form>
    </div>
  );
}
