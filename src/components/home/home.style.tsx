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

export const StyledTableTitle = styled.h1`
	align-self: center;
	font-family: 'Poppins';
	font-size: ${rem(24)};

	@media (min-width: 769px) {
		align-self: flex-start;
		font-size: ${rem(32)};
  	}
`;

export const StyledListControl = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: ${rem(10)};
`;
