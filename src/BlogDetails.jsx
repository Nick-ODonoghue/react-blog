import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
	const { id } = useParams();
	const { data: blog, isLoading, error } = useFetch("http://localhost:8000/blogs/" + id);

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
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
