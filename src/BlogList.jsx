import { useState } from "react";

const BlogList = ({ blogs, title, handleDelete }) => {
	return (
		<>
			<h2 className=" text-xl font-medium mb-2">{title}</h2>
			{blogs.map((blog) => (
				<div key={blog.id} className="mb-6 p-2 rounded-md hover:shadow-md transition-all duration-200 cursor-pointer">
					<h3 className=" text-pink-500 font-medium text-lg">{blog.title}</h3>
					<p className=" text-sm">Written by {blog.author}</p>
					<button onClick={() => handleDelete(blog.id)}>Delete blog</button>
				</div>
			))}
		</>
	);
};

export default BlogList;
