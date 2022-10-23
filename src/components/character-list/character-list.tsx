import { CHARACTERS } from '../../mocks/characters.mock';
import { Character } from '../../models/character.model';
import CharacterCard from '../character-card';
import { StyledTableContent } from './character-list.style';

const CharacterList = () => (
	<StyledTableContent>
		{CHARACTERS.map((character: Character, index: number) => (
			<CharacterCard key={index} {...character} />
		))}
	</StyledTableContent>
);

export default CharacterList;
