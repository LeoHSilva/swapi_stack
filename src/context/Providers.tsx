import { ReactNode } from "react"
import { SearchProvider } from "./SearchContext"
import { FilmProvider } from "./FilmContext"
import { PeopleProvider } from "./PeopleContext"

export const ContextProviders = ({ children }: { children: ReactNode }) => {
	return (
		<PeopleProvider>
			<FilmProvider>
				<SearchProvider>
					{children}
				</SearchProvider>
			</FilmProvider>
		</PeopleProvider>
	)
}