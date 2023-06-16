import { useState } from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleDelete }) => {
	return (
		<>
			<h2 className=" text-xl font-semibold mb-2">{title}</h2>
			{blogs.map((blog) => (
				<div key={blog.id} className="mb-4 px-2 py-4 rounded-md hover:shadow-md transition-all duration-200">
					<Link to={`/blogs/${blog.id}`}>
						<h3 className=" text-pink-500 font-medium text-lg">{blog.title}</h3>
						<p className=" text-sm">Written by {blog.author}</p>
					</Link>
					{/* <button
						className="border border-pink-500 py-1 px-2 mt-2 rounded-full text-xs shadow-md hover:bg-pink-500 hover:text-white hover:border-pink-500 hover:shadow-none transition-all duration-200"
						onClick={() => handleDelete(blog.id)}
					>
						Delete blog
					</button> */}
				</div>
			))}
		</>
	);
};

export default BlogList;
