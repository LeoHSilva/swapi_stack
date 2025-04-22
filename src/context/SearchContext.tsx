import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { SearchType } from "../components/search/constants";
import { Film, People } from "../types";
import { useFilmContext } from "./FilmContext";
import { usePeopleContext } from "./PeopleContext";
import { useLocation } from "react-router";

export type SearchResult = People | Film;

interface SearchContextProps {
	searchValue: string;
	setSearchValue: (value: string) => void;
	searchType: SearchType;
	setSearchType: (type: SearchType) => void;
	isLoading: boolean;
	hasError: boolean;
	errorMessage: string;
	searchResults: Array<SearchResult>;
	handleSearch: () => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
	const [searchValue, setSearchValue] = useState<string>("");
	const [searchType, setSearchType] = useState<SearchType>(SearchType.People);

	const filmContext = useFilmContext();
	const peopleContext = usePeopleContext();
	const location = useLocation();

	const handleSearch = () => {
		const { getByName } = searchType === SearchType.Movie ? filmContext : peopleContext;
		getByName(searchValue);
	}

	const { isLoading, hasError, errorMessage, searchResults } = searchType === SearchType.Movie ? filmContext : peopleContext;

	useEffect(() => {
		if (location.pathname === "/") {
			setSearchValue("");
			setSearchType(SearchType.People);
		}
	}, [location.pathname]);

	const values = {
		searchValue,
		setSearchValue,
		searchType,
		setSearchType,
		handleSearch,
		isLoading,
		hasError,
		errorMessage,
		searchResults,
	};

	return (
		<SearchContext.Provider value={values}>
			{children}
		</SearchContext.Provider>
	);
};

export const useSearchContext = (): SearchContextProps => {
	const context = useContext(SearchContext);
	if (!context) {
		throw new Error("useSearchContext must be used within a SearchProvider");
	}
	return context;
};