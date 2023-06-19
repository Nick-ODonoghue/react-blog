import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("");
	const [isPending, setIsPending] = useState(false);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		// Setting our blog object to our states before using the fetch post method below
		const blog = { title, body, author };

		setIsPending(true);

		fetch("http://localhost:8000/blogs", {
			method: "POST",
			headers: { "content-Type": "application/json" },
			body: JSON.stringify(blog),
		}).then(() => {
			setIsPending(false);
			history.push("/");
		});
	};

	return (
		<div className=" py-6">
			<h2 className=" text-xl font-semibold mb-2">Add a New Blog</h2>
			<form onSubmit={handleSubmit} className="flex flex-col">
				<label className="mb-2">Blog title:</label>
				<input className="mb-4 p-2" type="text" required onChange={(e) => setTitle(e.target.value)} />
				<label className="mb-2">Blog body:</label>
				<textarea className="mb-4 p-2" required onChange={(e) => setBody(e.target.value)}></textarea>
				<label className="mb-2">Author:</label>
				<input className="mb-4 p-2" type="text" onChange={(e) => setAuthor(e.target.value)} />
				<button className="border border-pink-500 bg-pink-500 text-white py-1 px-2 mt-2 rounded-full text-xs font-medium shadow-md hover:bg-black hover:text-pink-500 hover:border-pink-500 hover:shadow-none hover:font-semibold transition-all duration-200 w-1/2 mx-auto">
					{isPending && "Loading blog"}
					{!isPending && "Add blog"}
				</button>
			</form>
		</div>
	);
};

export default CreateBlog;
