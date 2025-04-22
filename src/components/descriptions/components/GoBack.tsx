import { Link } from "react-router";

const GoBack = () => {
	return (
		<Link to={`/`} className="flex w-[187px] rounded-3xl justify-center py-[8px] mt-9 text-white font-bold cursor-pointer bg-green-teal">
			BACK TO SEARCH
		</Link>
	);
}

export default GoBack;