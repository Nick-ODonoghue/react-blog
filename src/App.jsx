import Navbar from "./Navbar";
import Home from "./Home";
import CreateBlog from "./CreateBlog";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

// Importing everything needed for using React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
	return (
		// Any components that you want to use routing with need to be wrapped with the Router component
		<Router>
			<div className=" max-w-2xl mx-auto px-2">
				<Navbar />
				{/* The switch component makes sure that only one route is being shown at any one time */}
				<Switch>
					{/* The Route component is responsible for defining the route path */}
					{/* The value of the path property will tacked onto the end of your domain name */}
					<Route exact path="/">
						{/* You then set the component that you want rendered when that path has been navigated to */}
						<Home />
					</Route>
					<Route path="/create">
						<CreateBlog />
					</Route>
					<Route path="/blogs/:id">
						<BlogDetails />
					</Route>
					{/* If you would like to implement a 404 on all none specified url's you can use the * wildcard asterisk in a path */}
					{/* This needs to be the very last Route sepcified in your switch */}
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
