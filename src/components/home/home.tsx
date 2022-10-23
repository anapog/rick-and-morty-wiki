import { Navigate, BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { StyledContainer, StyledHeader, StyledContent, StyledLogo } from './home.style';
import logo from './rickAndMorty.png';
import CharacterList from '../character-list/character-list';
import CharacterDetail from '../character-detail/character-detail';
import { client } from '../../services/apollo-client';

const Home = () => (
	<StyledContainer>
		<StyledHeader>
			<StyledLogo src={logo} alt="Rick and Morty logo" />
		</StyledHeader>
		<StyledContent>
			<ApolloProvider client={client}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<CharacterList />} />
						<Route path="character/:id" element={<CharacterDetail />} />
						<Route path="*" element={<Navigate to="/" replace />} />
					</Routes>
				</BrowserRouter>
			</ApolloProvider>
		</StyledContent>
	</StyledContainer>
);

export default Home;
