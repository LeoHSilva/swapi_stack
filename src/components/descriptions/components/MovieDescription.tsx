type Props = {
	description?: string;
};

const MovieDescription = ({ description }: Props) => {
	return (<span className="mt-4 text-gray-600 whitespace-break-spaces">{description}</span>);
};

export default MovieDescription;