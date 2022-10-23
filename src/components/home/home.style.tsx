import styled from 'styled-components';
import { rem } from 'polished';

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: ${rem(48)};
	overflow-x: hidden;
`;

export const StyledHeader = styled.div`
	display: flex;
	justify-content: center;
	padding-bottom: ${rem(24)};
	font-family: 'Inter';
`;

export const StyledLogo = styled.img`
	height: auto;
	width: 100%;
	max-width: ${rem(340)};
`;

export const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	max-width: 85rem;
	width: 100%;
`;
