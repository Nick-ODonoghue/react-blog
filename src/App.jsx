import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
	return (
		<>
			<div className=" max-w-2xl mx-auto px-2">
				<Navbar />
				<Home />
			</div>
		</>
	);
}

export default App;
