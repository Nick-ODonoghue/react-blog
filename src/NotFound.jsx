import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<>
			<div className=" py-6">
				<h2 className=" text-xl font-semibold mb-2">Sorry</h2>
				<p className="mb-2">Page Not Found</p>
				<Link to="/" className=" text-pink-500 font-semibold">
					Home
				</Link>
			</div>
		</>
	);
};

export default NotFound;
