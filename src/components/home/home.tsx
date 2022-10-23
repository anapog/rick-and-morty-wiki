import {
	StyledContainer,
	StyledHeader,
	StyledContent,
	StyledListControl,
	StyledLogo,
	StyledTableTitle,
} from './home.style';
import logo from './rickAndMorty.png';
import CharacterList from '../character-list/character-list';

// TODO request all data

const Home = () => (
	<StyledContainer>
		<StyledHeader>
			<StyledLogo src={logo} alt="Rick and Morty logo" />
		</StyledHeader>
		{/* TODO could include filters on the left (Status, Gender, Species) */}
		<StyledContent>
			<StyledTableTitle>Characters</StyledTableTitle>
			<StyledListControl>
				{/* TODO search component over list with X to clear all content. Also under search number of total items */}
				<p>Search...</p>
				{/* TODO include order by */}
				<p>Order by</p>
			</StyledListControl>
			<CharacterList />
		</StyledContent>
	</StyledContainer>
);

export default Home;
