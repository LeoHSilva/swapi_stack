import { GoBack, Loading, NoResults } from "./components";

type Props = {
	isLoading: boolean;
	hasResults: boolean;
	title: string;
	descriptionTitle: string;
	descriptionElement: React.ReactElement;
	linksTitle: string;
	linksElement: React.ReactElement;
}

const Description = ({ isLoading, hasResults, title, descriptionTitle, descriptionElement, linksTitle, linksElement }: Props) => {

	if (isLoading) {
		return <Loading />;
	}

	if (!hasResults) {
		return <NoResults />;
	}

	return (
		<div className="flex flex-col w-[804px] min-h-[417px]">
			<div className="flex flex-col h-full justify-between">
				<div>
					<span className="font-bold text-[18px]">{title}</span>
					<div className="flex w-full mt-8 space-x-4">
						<div className="flex flex-col w-1/2">
							<span className="font-bold">{descriptionTitle}</span>
							<div className="w-full onePixel bg-pinkish-grey mb-0"></div>
							{descriptionElement}
						</div>
						<div className="flex flex-col w-1/2">
							<span className="font-bold">{linksTitle}</span>
							<div className="w-full onePixel bg-pinkish-grey mb-0"></div>
							<div>
								{linksElement}
							</div>
						</div>
					</div>
				</div>
				<div className="flex w-full">
					<GoBack />
				</div>
			</div>
		</div>
	);
}

export default Description;
