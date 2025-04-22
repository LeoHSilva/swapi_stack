import { Button } from '@headlessui/react'
import Radio from "./components/Radio";
import { SearchType } from "./constants";
import { useSearchContext } from '../../context/SearchContext';

const InputPlaceholder = {
	[SearchType.People]: "e.g. Chewbacca, Yoda, Boba Fett",
	[SearchType.Movie]: "e.g. Empire Strikes Back, Phantom Menance, Revange of the Sith",
}

const Search = () => {
	const { searchValue, setSearchValue, searchType, setSearchType, isLoading, handleSearch } = useSearchContext();

	return (
		<div className="searchBox shadowBox">
		<div className="flex w-full flex-col space-y-[20px]">
			<span className="font-semibold text-[#383838] ">What are you searching for?</span>
			<div className="flex w-full">
				<Radio onChange={(e) => setSearchType(e.target.value as SearchType)} checked={searchType === SearchType.People} label="People" value={SearchType.People} />
				<Radio onChange={(e) => setSearchType(e.target.value as SearchType)} checked={searchType === SearchType.Movie} label="Movie" value={SearchType.Movie} />
			</div>
			<div className="flex w-full rounded-[4px] border-2 py-[6px] px-[10px] border-[#c4c4c4]">
				<input value={searchValue} className="w-full focus:outline-0 font-bold" onChange={(e) => setSearchValue(e.target.value)} placeholder={InputPlaceholder[searchType]} />
			</div>
			<div>
				<Button onClick={handleSearch} disabled={Boolean(searchValue === '')} className={`flex w-full rounded-3xl justify-center py-[8px] text-white font-bold cursor-pointer ${searchValue === '' ? "bg-[#c4c4c4] " : 'bg-[#0ab463]'}`}>
					{isLoading ? "SEARCHING..." : "SEARCH"}
				</Button>
			</div>
		</div>
		</div>
	)
}

export default Search;