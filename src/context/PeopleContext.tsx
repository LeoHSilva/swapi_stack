import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { People } from "../types";
import { useLocation, useParams } from "react-router";


interface PeopleContextProps {
	isLoading: boolean;
	hasError: boolean;
	errorMessage: string;
	searchResults: Array<People>;
	searchId: People | null;
	getByName: (name: string) => void;
}

const PeopleContext = createContext<PeopleContextProps | undefined>(undefined);

export const PeopleProvider = ({ children }: { children: ReactNode }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [hasError, setHasError] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string>("");
	const [searchResults, setSearchResults] = useState<Array<People>>([]);
	const [searchId, setSearchId] = useState<People | null>(null);

	const { id } = useParams();
	const location = useLocation();


	const handleSearch = async (type: string, search: string) => {
		try {
			setIsLoading(true);
			const url = type === "id" ? search : `?search=${search}`;

			const response = await fetch("/api/people/" + url);
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
		if (id && location.pathname.includes("/people")) {
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
		return handleSearch("name", name);
	}

	return (
		<PeopleContext.Provider value={{ isLoading, hasError, getByName, searchResults, errorMessage, searchId }}>
			{children}
		</PeopleContext.Provider>
	);
};

export const usePeopleContext = (): PeopleContextProps => {
	const context = useContext(PeopleContext);
	if (!context) {
		throw new Error("usePeopleContext must be used within a PeopleProvider");
	}
	return context;
};