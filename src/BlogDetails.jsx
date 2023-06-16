import { useParams } from "react-router-dom";

const BlogDetails = () => {
	const { id } = useParams();

	return (
		<div className=" py-6">
			<h2 className=" text-xl font-semibold mb-2">Blog Details {id}</h2>
		</div>
	);
};

export default BlogDetails;
