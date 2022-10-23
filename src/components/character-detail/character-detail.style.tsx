import styled from 'styled-components';
import { rem } from 'polished';
import { Link } from 'react-router-dom';

export const StyledReactLink = styled(Link)`
	display: flex;
	align-items: center;
	width: fit-content;
	margin: ${rem(20)} 0;
	gap: ${rem(10)};
	font-family: 'Poppins';
	color: black;
	text-decoration: none;
	font-size: ${rem(12)};

	@media (min-width: 769px) {
		font-size: ${rem(18)};
	}
`;

export const StyledDetailContent = styled.div`
	display: flex;
	flex-direction: column;
	margin: ${rem(10)} 0;

	@media (min-width: 769px) {
		margin: ${rem(20)} 0;
	}
`;

export const StyledCharacterAvatar = styled.img`
	align-self: center;
	width: 100%;
	height: auto;
	max-width: ${rem(180)};
	border-radius: 50%;

	@media (min-width: 769px) {
		width: ${rem(300)};
		max-width: ${rem(300)};
	}
`;

export const StyledInformation = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: ${rem(36)};
	font-family: 'Inter';
`;

export const StyledInformationHeader = styled.div`
	display: flex;
    flex-direction: column;
	align-items: center;
`;

export const StyledCardTitle = styled.p`
	margin: 0 0 ${rem(4)} 0;
	font-size: ${rem(32)};
	font-weight: 500;
`;

export const StyledPropertySection = styled.div`
	display: flex;
	padding-top: ${rem(20)};
	gap: ${rem(8)};
`;

export const StyledCardStatus = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: ${rem(4)} 0;
`;

export const StyledStatusColor = styled.div`
	width: ${rem(10)};
	height: ${rem(10)};
	margin-right: ${rem(8)};
	border-radius: 50%;
`;

export const StyledStatusText = styled.p`
	margin: 0;
	font-size: ${rem(18)};
`;

export const StyleCardSubtitle = styled.p`
	margin: ${rem(4)} 0;
	font-size: ${rem(18)};
`;

export const StyledSectionProperty = styled.div`
	font-size: ${rem(16)};
	color: #666666;
`;

export const StyledSectionValue = styled.div`
	margin: 0;
	font-size: ${rem(16)};
	text-transform: capitalize;
`;

export const StyledDataSection = styled.div`
	margin-top: ${rem(30)};
`;

export const StyledEpisodesSection = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${rem(16)};
`;

export const StyledEpisodesContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	column-gap: ${rem(20)};
    row-gap: ${rem(15)};

	@media (min-width: 1025px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1201px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;