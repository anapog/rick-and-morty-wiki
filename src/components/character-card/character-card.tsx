import { useNavigate } from 'react-router-dom';
import { Status, StatusColor } from '../../enums/status.enum';
import { Character } from '../../models/character.model';
import {
	StyledStatusColor,
	StyledPropValue,
	StyledCharacterAvatar,
	StyledCharacterDescription,
	StyledCharacterCard,
	StyledCardStatus,
	StyledCardTitle,
} from './character-card.style';

const CharacterCard = ({ id, name, status, species, image, episode }: Character) => {
	const navigate = useNavigate();

	const navigateToDetail = () => {
		navigate(`/character/${id}`);
	};

	const getCardStatus = (): JSX.Element => (
		<StyledCardStatus>
			<StyledStatusColor
				style={{ background: StatusColor[status.toLowerCase() as Status] ?? StatusColor.unknown }}
			></StyledStatusColor>
			<StyledPropValue>
				{status} - {species}
			</StyledPropValue>
		</StyledCardStatus>
	);

	const getEpisodeMsg = (): string =>
		episode?.length === 1 ? `${episode.length} episode` : `${episode.length ?? 0} episodes`;

	return (
		<StyledCharacterCard onClick={navigateToDetail}>
			<StyledCharacterAvatar src={image} alt="Character image" />
			<StyledCharacterDescription>
				<StyledCardTitle>{name}</StyledCardTitle>
				{getCardStatus()}
				<StyledPropValue>{getEpisodeMsg()}</StyledPropValue>
			</StyledCharacterDescription>
		</StyledCharacterCard>
	);
};

export default CharacterCard;
