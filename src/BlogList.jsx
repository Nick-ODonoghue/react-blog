import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
	return (
		<>
			<h2 className=" text-xl font-semibold mb-2">{title}</h2>
			{/* We're being passed the blogs param from Home.jsx */}
			{/* It's an array of objects so we can map over the data */}
			{blogs.map((blog) => (
				// We name each element in the array blog and then use dot notation on the keys to render the values
				<div key={blog.id} className="mb-4 px-2 py-4 rounded-md hover:shadow-md transition-all duration-200">
					<Link to={`/blogs/${blog.id}`}>
						<h3 className=" text-pink-500 font-medium text-lg">{blog.title}</h3>
						<p className=" text-sm">Written by {blog.author}</p>
					</Link>
				</div>
			))}
		</>
	);
};

export default BlogList;
