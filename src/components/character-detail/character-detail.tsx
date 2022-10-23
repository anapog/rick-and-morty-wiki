import {
	StyledCardStatus,
	StyledCardTitle,
	StyledCharacterAvatar,
	StyledDetailContent,
	StyledInformation,
	StyledPropertySection,
	StyledReactLink,
	StyledSectionProperty,
	StyledSectionValue,
	StyledStatusColor,
	StyledStatusText,
} from './character-detail.style';
import { FaArrowLeft } from 'react-icons/fa';
import { CHARACTERS } from '../../mocks/characters.mock';
import { getParsedEpisodes } from '../../utils/character.utils';
import { Status, StatusColor } from '../../enums/status.enum';

const getPropertySection = (title: string, value: string): JSX.Element => (
	<StyledPropertySection>
		<StyledSectionProperty>{title}</StyledSectionProperty>
		<StyledSectionValue>{value}</StyledSectionValue>
	</StyledPropertySection>
);

const CharacterDetail = () => {
	const { name, location, episode, image, species, status } = CHARACTERS[0];
	const episodes = getParsedEpisodes(episode);

	// TODO request more information about location and episodes
	return (
		<>
			<StyledReactLink to="../.." relative="path">
				<FaArrowLeft /> Go back
			</StyledReactLink>
			<StyledDetailContent>
				<StyledCharacterAvatar src={image} alt="Character image" />
				<StyledInformation>
					<StyledCardTitle>{name}</StyledCardTitle>
					<StyledCardStatus>
						<StyledStatusColor
							style={{ background: StatusColor[status.toLowerCase() as Status] ?? 'grey' }}
						></StyledStatusColor>
						<StyledStatusText>{status}</StyledStatusText>
					</StyledCardStatus>
					{getPropertySection('Location:', location?.name ?? 'Unknown')}
					{getPropertySection('Species:', species ?? 'Unknown')}
					{getPropertySection(
						`${episodes?.length > 1 ? 'Episodes' : 'Episode'}:`,
						episodes.length ? episodes.join(', ') : 'Unknown'
					)}
				</StyledInformation>
			</StyledDetailContent>
		</>
	);
};

export default CharacterDetail;
