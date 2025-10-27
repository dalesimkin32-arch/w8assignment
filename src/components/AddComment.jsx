// /src/components/AddComment.jsx

export default function AddComment({ id }) {
  // import pg and all the settting up ect.
  async function handleSubmit(formData) {
    "use server";
    // do our database stuff in here on submit

    // the formData is passed automatically the the handlesubmit on submission
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
          className="bg-green-400 text-white text-2xl font-bold border-gray-300 shadow-sm focus:border-white focus:ring focus:ring-white focus:ring-opacity-50"
        />
        <textarea
          name="comment"
          placeholder="Comment Here..."
          rows="4"
          required
          className="bg-green-400 text-white text-2xl font-bold border-gray-300 shadow-sm focus:border-white focus:ring focus:ring-white focus:ring-opacity-50"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-medium text-green-700 bg-white rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
