import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const BlogDetails = () => {
	const { id } = useParams();
	const { data: blog, isLoading, error } = useFetch("http://localhost:8000/blogs/" + id);
	const history = useHistory();
	const [isPending, setIsPending] = useState(false);

	const handleDelete = () => {
		setIsPending(true);

		fetch(`http://localhost:8000/blogs/${id}`, {
			method: "DELETE",
		}).then(() => {
			setTimeout(() => {
				history.push("/");
			}, 1000);
		});
	};

	return (
		<div className=" py-6">
			{/* <h2 className=" text-xl font-semibold mb-2">Blog Details {id}</h2> */}
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
						{isPending && "Deleting..."}
						{!isPending && "Delete"}
					</button>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
