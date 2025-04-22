import React from "react";
import { useSearchContext } from "../../context/SearchContext";
import Divider from "./components/Divider";
import ListItem from "./components/ListItem";

const Results = () => {
	const { isLoading, searchResults, searchType } = useSearchContext();

	return (
		<div className="searchResults shadowBox">
			<div className="flex flex-col w-full space-y-2 overflow-auto">
				<span className="font-bold text-[18px]">Results</span>
				<Divider />
				<div className={`flex flex-col w-full h-grow font-bold align-middle items-center justify-center ${(isLoading || searchResults.length === 0) && "pt-[50%] text-[#c4c4c4]"}`}>
					{isLoading && <span>Searching...</span>}
					{!isLoading && searchResults.length === 0 && (<>
						<span>There are zero matches.</span>
						<span>Use the form to search for People or Movies.</span>
					</>
					)}
					{!isLoading && searchResults.length > 0 && searchResults.map((item) => (
						<React.Fragment key={item.id}>
							<ListItem name={item.name} type={searchType} id={item.id} />
							<Divider />
						</React.Fragment>
					))}
				</div>
			</div>
		</div>
	)
}

export default Results;