import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FaArrowLeft } from 'react-icons/fa';
import {
	StyleCardSubtitle,
	StyledCardStatus,
	StyledCardTitle,
	StyledCharacterAvatar,
	StyledDetailContent,
	StyledInformation,
	StyledDataSection,
	StyledPropertySection,
	StyledReactLink,
	StyledSectionProperty,
	StyledSectionValue,
	StyledStatusColor,
	StyledStatusText,
	StyledEpisodesContainer,
	StyledInformationHeader,
	StyledEpisodesSection,
} from './character-detail.style';
import { Status, StatusColor } from '../../enums/status.enum';
import { GET_CHARACTER } from '../../services/queries';
import { Episode, Location } from '../../models/character.model';

const getPropertySection = (title: string, value: string): JSX.Element => (
	<StyledPropertySection>
		<StyledSectionProperty>{title}</StyledSectionProperty>
		<StyledSectionValue>{value}</StyledSectionValue>
	</StyledPropertySection>
);

const getEpisodesSection = (episode: Episode[]): JSX.Element => (
	<StyledEpisodesSection>
		<StyledSectionProperty>Episodes</StyledSectionProperty>
		<StyledEpisodesContainer>
			{episode.map((ep: Episode) => (
				<StyledSectionValue>
					{ep.episode} - {ep.name}
				</StyledSectionValue>
			))}
		</StyledEpisodesContainer>
	</StyledEpisodesSection>
);

const getLocationSection = (location: Location): JSX.Element => (
	<>
		{getPropertySection('Last known location:', `${location.name} (${location.residents.length} residents)`)}
		{location.dimension && getPropertySection('Last known dimension:', location.dimension)}
	</>
);

const getBackgroundColor = (status: Status) => StatusColor[status] ?? 'grey';

const CharacterDetail = () => {
	const { id } = useParams();
	const { data, error, loading } = useQuery(GET_CHARACTER, { variables: { id } });
	const character = data?.character;

	if (loading) {
		return <h1>Loading...</h1>;
	}

	if (error) {
		return <p>There was an error while fetching the caracters</p>;
	}

	if (!character) {
		return <p>Sorry, no data was found for this character</p>;
	}

	const { name, status, species, gender, image, location, episode } = data?.character;

	return (
		<>
			<StyledReactLink to="../.." relative="path">
				<FaArrowLeft /> Go back
			</StyledReactLink>
			<StyledDetailContent>
				<StyledCharacterAvatar src={image} alt="Character image" />
				<StyledInformation>
					<StyledInformationHeader>
						<StyledCardTitle>{name}</StyledCardTitle>
						<StyledCardStatus>
							<StyledStatusColor style={{ background: getBackgroundColor(status.toLowerCase()) }} />
							<StyledStatusText>
								{status} - {species}
							</StyledStatusText>
						</StyledCardStatus>
						<StyleCardSubtitle>{gender}</StyleCardSubtitle>
					</StyledInformationHeader>
					<StyledDataSection>{getLocationSection(location)}</StyledDataSection>
					<StyledDataSection>{getEpisodesSection(episode)}</StyledDataSection>
				</StyledInformation>
			</StyledDetailContent>
		</>
	);
};

export default CharacterDetail;
