import { SearchType } from "../../search/constants";
import { Link } from "react-router";

type Props = {
	id: string;
	name: string;
	type: SearchType;
}

const ListItem = ({ name, type, id }: Props) => {


	return (
		<div className="flex justify-between items-center w-full space-y-4">
			<span className="text-[18px] align-middle place-self-center my-4 ">{name}</span>
			<Link to={`/${type}/${id}`} className="flex w-1/4 rounded-3xl justify-center py-[8px] text-white font-bold cursor-pointer bg-green-teal">
				SEE DETAILS
			</Link>
		</div>
	);
};

export default ListItem;