import { Link } from "react-router";

type Props = {
	links?: Array<{
		id: string;
		name: string;
	}>;
	urlPrefix: string;
};

const Links = ({ links, urlPrefix }: Props) => {
	return links?.map((value, index) => (
		<Link to={`/${urlPrefix}/${value.id}`}>
			<span className="text-emerald hover:underline">
				{value.name}
			</span>{index !== links.length - 1 && ", "}
		</Link>
	))
}

export default Links;