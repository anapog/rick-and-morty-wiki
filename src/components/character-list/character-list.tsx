import { useQuery } from '@apollo/client';
import { Character } from '../../models/character.model';
import CharacterCard from '../character-card';
import { StyledListContent, StyledListControl, StyledTableTitle } from './character-list.style';
import { GET_CHARACTERS } from '../../services/queries';

const CharacterList = () => {
	const { data, loading, error } = useQuery(GET_CHARACTERS);
	const characters = data?.characters;

	if (loading) {
		return <h1>Loading...</h1>;
	}

	if (error) {
		return <p>There was an error while fetching the caracters</p>;
	}

	return (
		<>
			{/* TODO could include filters on the left (Status, Gender, Species) */}
			<StyledTableTitle>Characters</StyledTableTitle>
			<StyledListControl>
				{/* TODO search component over list with X to clear all content. Also under search number of total items */}
				<p>Search...</p>
				{/* TODO include order by */}
				<p>Order by</p>
			</StyledListControl>
			{characters?.results && (
				<StyledListContent>
					{characters?.results?.map((character: Character, index: number) => (
						<CharacterCard key={index} {...character} />
					))}
				</StyledListContent>
			)}
		</>
	);
};

export default CharacterList;
