import { CharacterDescription, Links } from "./components";
import { usePeopleContext } from "../../context/PeopleContext";
import Description from "./Description";

const FilmDetails = () => {
	const { searchId: result, isLoading } = usePeopleContext();

	return (
		<Description
			isLoading={isLoading}
			hasResults={result !== null}
			title={result?.name || ""}
			descriptionTitle="Details"
			descriptionElement={<CharacterDescription {...result} />}
			linksTitle="Characters"
			linksElement={<Links links={result?.movies} urlPrefix="films" />} />);
}

export default FilmDetails;
