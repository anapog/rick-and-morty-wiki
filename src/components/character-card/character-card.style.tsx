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
	margin-top: ${rem(24)};
	align-items: center
`;

export const StyledCardTitle = styled.p`
	margin: 0;
	margin-bottom: ${rem(10)};
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

export const StyledPropValue = styled.p`
	margin: 0;
	font-size: ${rem(16)};
`;
