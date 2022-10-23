import { CHARACTERS } from '../../mocks/characters.mock';
import { Character } from '../../models/character.model';
import CharacterCard from '../character-card';
import { StyledListContent, StyledListControl, StyledTableTitle } from './character-list.style';

const CharacterList = () => (
	<>
		{/* TODO could include filters on the left (Status, Gender, Species) */}
		<StyledTableTitle>Characters</StyledTableTitle>
		<StyledListControl>
			{/* TODO search component over list with X to clear all content. Also under search number of total items */}
			<p>Search...</p>
			{/* TODO include order by */}
			<p>Order by</p>
		</StyledListControl>
		<StyledListContent>
			{CHARACTERS.map((character: Character, index: number) => (
				<CharacterCard key={index} {...character} />
			))}
		</StyledListContent>
	</>
);

export default CharacterList;
