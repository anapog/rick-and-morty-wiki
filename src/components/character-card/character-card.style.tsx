import styled from 'styled-components';
import { rem } from 'polished';

export const StyledCharacterCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: 'Inter';
	cursor: pointer;
`;

export const StyledCharacterAvatar = styled.img`
	width: 100%;
	height: auto;
	border-radius: 50%;
`;

export const StyledCharacterDescription = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: ${rem(20)};
`;

export const StyledCardTitle = styled.p`
	margin: 0 0 ${rem(4)} 0;
	font-size: ${rem(18)};
	font-weight: 500;
`;

export const StyledCardStatus = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: ${rem(10)};
`;

export const StyledStatusColor = styled.div`
	width: ${rem(10)};
	height: ${rem(10)};
	margin-right: ${rem(8)};
	border-radius: 50%;
`;

export const StyledStatusText = styled.p`
	margin: 0;
	font-size: ${rem(16)};
`;

export const StyledPropertySection = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-top: ${rem(8)};

	@media (min-width: 481px) {
		flex-direction: column;
  	}

	@media (min-width: 769px) {
		flex-direction: row;
  	}
`;

export const StyledSectionProperty = styled.p`
	margin: 0;
	margin-right: ${rem(8)};
	font-size: ${rem(16)};
	color: #666666;
`;

export const StyledSectionValue = styled.p`
	margin: 0;
	font-size: ${rem(16)};
`;
