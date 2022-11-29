import { useQuery } from '@apollo/client';
import { Character } from '../../models/character.model';
import CharacterCard from '../character-card';
import { StyledListContent, StyledListControl, StyledTableTitle } from './character-list.style';
import { GET_CHARACTERS } from '../../services/queries';
import { useEffect, useState } from 'react';
import Pagination from '../pagination';

const CharacterList = () => {
	const [pages, setPages] = useState<number>(0);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [totalResults, setTotalResults] = useState<number>(0);
	const { data, loading, error } = useQuery(GET_CHARACTERS);
	const characters = data?.characters;
	const { info, results } = characters || {};

	useEffect(() => {
		setPages(info?.pages ?? 0);
		setTotalResults(info?.count ?? 0);
	}, [info]);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	if (error) {
		return <p>There was an error while fetching the caracters</p>;
	}

	const handlePageChange = (newPage: number): void => {
		setCurrentPage(newPage);
		// requestNextPage(newPage)
	};

	return (
		<>
			{/* TODO could include filters on the left (Status, Gender, Species) */}
			<StyledTableTitle>Characters</StyledTableTitle>
			<StyledListControl>
				{/* TODO search component over list with X to clear all content. Also under search number of total items */}
				<p>Search... {totalResults} results</p>
				{/* TODO include order by */}
				<p>Order by</p>
			</StyledListControl>
			{results && (
				<StyledListContent>
					{characters?.results?.map((character: Character, index: number) => (
						<CharacterCard key={index} {...character} />
					))}
					<Pagination pages={pages} currentPage={currentPage} onPageChange={handlePageChange} />
				</StyledListContent>
			)}
		</>
	);
};

export default CharacterList;
