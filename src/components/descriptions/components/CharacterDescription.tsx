import { People } from "../../../types";

const CharacterDescription = ({ birth_year, gender, eye_color, hair_color, height, mass }: Partial<People>) => {
	return (
		<>
			<span>Birth Year: {birth_year}</span>
			<span>Gender: {gender}</span>
			<span>Eye Color: {eye_color}</span>
			<span>Hair Color: {hair_color}</span>
			<span>Height: {height}</span>
			<span>Mass: {mass}</span>
		</>
	)
}
export default CharacterDescription;