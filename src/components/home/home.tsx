import { Navigate, BrowserRouter, Route, Routes } from 'react-router-dom';
import { StyledContainer, StyledHeader, StyledContent, StyledLogo } from './home.style';
import logo from './rickAndMorty.png';
import CharacterList from '../character-list/character-list';
import CharacterDetail from '../character-detail/character-detail';

// TODO request all data

const Home = () => (
	<StyledContainer>
		<StyledHeader>
			<StyledLogo src={logo} alt="Rick and Morty logo" />
		</StyledHeader>
		<StyledContent>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<CharacterList />} />
					<Route path="character/:id" element={<CharacterDetail />} />
					<Route path='*' element={<Navigate to='/' replace />} />
				</Routes>
			</BrowserRouter>
		</StyledContent>
	</StyledContainer>
);

export default Home;
