const Navbar = () => {
	return (
		<header className="py-2 border-b-2 border-pink-100">
			<nav className="flex justify-between items-center">
				<h1 className="text-xl text-pink-500 font-medium">Joe's Blogs</h1>
				<div className="flex gap-6">
					<a href="#" target="_blank" rel="noopener noreferrer">
						Home
					</a>
					<a href="#" target="_blank" rel="noopener noreferrer">
						New Blog
					</a>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
