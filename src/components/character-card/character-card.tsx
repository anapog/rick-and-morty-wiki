import { useNavigate } from 'react-router-dom';
import { Status, StatusColor } from '../../enums/status.enum';
import { Character } from '../../models/character.model';
import { getParsedEpisodes } from '../../utils/character.utils';
import {
	StyledStatusColor,
	StyledStatusText,
	StyledCharacterAvatar,
	StyledCharacterDescription,
	StyledCharacterCard,
	StyledPropertySection,
	StyledSectionProperty,
	StyledCardStatus,
	StyledCardTitle,
	StyledSectionValue,
} from './character-card.style';

const getPropertySection = (title: string, value: string): JSX.Element => (
	<StyledPropertySection>
		<StyledSectionProperty>{title}</StyledSectionProperty>
		<StyledSectionValue>{value}</StyledSectionValue>
	</StyledPropertySection>
);

const CharacterCard = ({ id, episode, image, name, status, species, location }: Character) => {
	const navigate = useNavigate();
	const episodes = getParsedEpisodes(episode);

	const navigateToDetail = () => {
		navigate(`/character/${id}`);
	};

	return (
		<StyledCharacterCard onClick={navigateToDetail}>
			<StyledCharacterAvatar src={image} alt="Character image" />
			<StyledCharacterDescription>
				<StyledCardTitle>{name}</StyledCardTitle>
				<StyledCardStatus>
					<StyledStatusColor
						style={{ background: StatusColor[status.toLowerCase() as Status] ?? 'grey' }}
					></StyledStatusColor>
					<StyledStatusText>
						{status} - {species}
					</StyledStatusText>
				</StyledCardStatus>
				{getPropertySection('Location:', location?.name ?? 'Unknown')}
				{getPropertySection(
					`${episodes?.length > 1 ? 'Episodes' : 'Episode'}:`,
					episodes.length ? episodes.join(', ') : 'Unknown'
				)}
			</StyledCharacterDescription>
		</StyledCharacterCard>
	);
};

export default CharacterCard;
