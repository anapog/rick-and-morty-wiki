import { useNavigate } from 'react-router-dom';
import { Status, StatusColor } from '../../enums/status.enum';
import { Character } from '../../models/character.model';
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

const CharacterCard = ({ id, name, status, species, gender, image, episode }: Character) => {
	const navigate = useNavigate();

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
				{getPropertySection('Gender:', gender)}
				{getPropertySection('Episodes:', `${episode?.length}` ?? 'Unknown')}
				{getPropertySection('Since:', `${episode[0].air_date}`)}
			</StyledCharacterDescription>
		</StyledCharacterCard>
	);
};

export default CharacterCard;
