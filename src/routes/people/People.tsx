import { PersonDescription } from "../../components/descriptions";

const People = () => {
	return (
		<div className="flex justify-center">
			<div className="flex w-2/3 h-3/4 bg-white p-[30px] shadowBox">
				<PersonDescription />
			</div>
		</div>
	)
}

export default People;