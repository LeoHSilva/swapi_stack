import { FilmDescription } from "../../components/descriptions";

const Films = () => {
	return (
		<div className="flex justify-center">
			<div className="flex w-2/3 h-3/4 bg-white p-[30px] shadowBox">
				<FilmDescription />
			</div>
		</div>
	)
}

export default Films;