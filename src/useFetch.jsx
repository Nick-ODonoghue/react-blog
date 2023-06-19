import { useState, useEffect } from "react";

// This is our custom hook which takes a url paramter
const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		// I added a setTimeout just to add the effect of data being retrieved
		setTimeout(() => {
			// We use the JS fetch api method with our passed url argument
			fetch(url)
				.then((res) => {
					// Check the response is ok and throw an error if not
					if (!res.ok) {
						throw Error("Couldn't fetch data from that resource");
					}
					return res.json();
				})
				// Once we have the data returned we can then use it for our data state setter
				.then((data) => {
					setData(data);
					// A bit of logic for our isLoading and error checking
					setIsLoading(false);
					setError(null);
				})
				.catch((err) => {
					setIsLoading(false);
					setError(err.message);
				});
		}, 1000);
		// Dependency array making sure to re-render everytime the url is change
	}, [url]);

	// Our custom hook is returning the data it retrieves from the given url aswell as the loading and error state
	return { data, isLoading, error };
};

export default useFetch;
