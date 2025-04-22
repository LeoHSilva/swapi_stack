import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Film } from "../types";
import { useLocation, useParams } from "react-router";


interface FilmContextProps {
	isLoading: boolean;
	hasError: boolean;
	errorMessage: string;
	searchResults: Array<Film>;
	searchId: Film | null;
	getByName: (name: string) => void;
}

const FilmContext = createContext<FilmContextProps | undefined>(undefined);

export const FilmProvider = ({ children }: { children: ReactNode }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [hasError, setHasError] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string>("");
	const [searchResults, setSearchResults] = useState<Array<Film>>([]);
	const [searchId, setSearchId] = useState<Film | null>(null);

	const { id } = useParams();
	const location = useLocation();

	const handleSearch = async (type: string, search: string) => {
		try {
			setIsLoading(true);
			const url = type === "id" ? search : `?search=${search}`;

			const response = await fetch("/api/films/" + url);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const data = await response.json();
			if (type === "id") {
				setSearchId(data);
			} else {
				setSearchResults(data);
			}
			setIsLoading(false);
		} catch (error) {
			console.error("Error fetching data:", error);

			setErrorMessage("Failed to fetch data");
			setHasError(true);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (id && location.pathname.includes("films")) {
			handleSearch("id", id);
		}

		if (location.pathname === "/") {
			setSearchResults([]);
		}
	}, [id, location]);

	const getByName = async (name: string) => {
		if (name.trim() === "") {
			setHasError(true);
			return;
		}
		handleSearch("name", name);
	}

	return (
		<FilmContext.Provider value={{ isLoading, hasError, getByName, searchResults, errorMessage, searchId }}>
			{children}
		</FilmContext.Provider>
	);
};

export const useFilmContext = (): FilmContextProps => {
	const context = useContext(FilmContext);
	if (!context) {
		throw new Error("useFilmContext must be used within a FilmProvider");
	}
	return context;
};