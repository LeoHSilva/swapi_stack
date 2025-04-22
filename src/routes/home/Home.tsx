import Search from "../../components/search/Search";
import Results from "../../components/result/Results";

const Home = () => {
	return (
		<div className="flex justify-center space-x-8">
			<Search />
			<Results />
		</div>
	)
}

export default Home;