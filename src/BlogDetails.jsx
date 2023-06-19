import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";

const BlogDetails = () => {
	const { id } = useParams();
	const { data: blog, isLoading, error } = useFetch("http://localhost:8000/blogs/" + id);
	const history = useHistory();
	const [isPending, setIsPending] = useState(false);

	// Handle delete function used to delete blogs when needed
	const handleDelete = () => {
		// isPending used to change the state of the delete button to give some UX
		setIsPending(true);

		// Using a JS fetch method making a delete post
		fetch(`http://localhost:8000/blogs/${id}`, {
			method: "DELETE",
		}).then(() => {
			// setTimeout used for some UX
			setTimeout(() => {
				// Redirecting user back to the home page
				history.push("/");
			}, 1000);
		});
	};

	return (
		<div className=" py-6">
			{isLoading && <div>Loading blog...</div>}
			{error && <div>{error}</div>}
			{blog && (
				<article>
					<h2 className=" text-xl font-semibold mb-2">{blog.title}</h2>
					<h3 className=" text-sm font-light mb-8">Written by {blog.author}</h3>
					<p className=" text-md font-normal">{blog.body}</p>
					<button
						onClick={handleDelete}
						className="border border-pink-500 bg-pink-500 text-white py-2 px-4 mt-2 rounded-full text-xs font-medium shadow-md hover:bg-black hover:text-pink-500 hover:border-pink-500 hover:shadow-none hover:font-semibold transition-all duration-200 block mx-auto"
					>
						{/* conditionally rendering the buttons text */}
						{isPending && "Deleting..."}
						{!isPending && "Delete"}
					</button>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
