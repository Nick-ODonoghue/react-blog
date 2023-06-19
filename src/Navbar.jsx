import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<header className="py-2 border-b-2 border-pink-100">
			<nav className="flex justify-between items-center">
				<h1 className="text-xl text-pink-500 font-medium">Joe's Blogs</h1>
				<div className="flex gap-6">
					{/* We use react-router-dom Link tags instead of traditional anchor tags */}
					<Link to="/">Home</Link>
					<Link to="/create">New Blog</Link>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
