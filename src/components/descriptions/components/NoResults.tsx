import GoBack from "./GoBack";

const NoResults = () => {
	return (
		<div className="flex flex-col w-full h-full">
			<h2 className="text-2xl font-bold text-gray-800">No Results Found</h2>
			<p className="mt-4 text-gray-600">Please try a different search.</p>
			<div className="flex w-full mt-6 ">
				<GoBack />
			</div>
		</div>
	);
}

export default NoResults;