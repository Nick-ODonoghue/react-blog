import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
	const [blogs, setBlogs] = useState([
		{ title: "Blog 1", body: "lorem ipsum...", author: "NickOD.xyz", id: 1 },
		{ title: "Blog 2", body: "lorem ipsum...", author: "NickOD.xyz", id: 2 },
		{ title: "Blog 3", body: "lorem ipsum...", author: "NickOD.xyz", id: 3 },
	]);

	const handleDelete = (id) => {
		console.log(id);
		const newBlogs = blogs.filter((blog) => {
			return blog.id !== id;
		});
		setBlogs(newBlogs);
	};

	return (
		<main className="py-6">
			<BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
		</main>
	);
};

export default Home;
