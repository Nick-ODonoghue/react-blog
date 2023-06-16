import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
	// const handleDelete = (id) => {
	// 	const newBlogs = blogs.filter((blog) => blog.id !== id);
	// 	setBlogs(newBlogs);
	// };

	const { data: blogs, isLoading, error } = useFetch("http://localhost:8000/blogs");

	return (
		<main className="py-6">
			{error && <div>{error}</div>}
			{isLoading && <div>Loading blogs...</div>}
			{blogs && <BlogList blogs={blogs} title="All Blogs" />}
		</main>
	);
};

export default Home;
