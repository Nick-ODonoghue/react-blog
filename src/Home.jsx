import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
	const { data: blogs, isLoading, error } = useFetch("http://localhost:8000/blogs");

	return (
		<main className="py-6">
			{/* We use conditional rendering */}
			{/* First we check if there is an error and render the error div if so */}
			{error && <div>{error}</div>}
			{/* We check if isLoading is tru and render loading blogs if so */}
			{isLoading && <div>Loading blogs...</div>}
			{/* Finally we're chekcing if blogs is true and rendering our BlogList component */}
			{blogs && <BlogList blogs={blogs} title="All Blogs" />}
		</main>
	);
};

export default Home;
