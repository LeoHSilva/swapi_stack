import { useFilmContext } from "../../context/FilmContext";
import { Links, MovieDescription } from "./components";
import Description from "./Description";

const FilmDescription = () => {
	const { searchId: result, isLoading } = useFilmContext();

	return (
		<Description
			isLoading={isLoading}
			hasResults={result !== null}
			title={result?.name || ""}
			descriptionTitle="Opening Crawl"
			descriptionElement={<MovieDescription description={result?.description} />}
			linksTitle="Characters"
			linksElement={<Links links={result?.characters} urlPrefix="people" />} />);
}

export default FilmDescription;