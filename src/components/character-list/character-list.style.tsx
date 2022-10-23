import styled from 'styled-components';
import { rem } from 'polished';

export const StyledTableTitle = styled.h1`
	margin: ${rem(20)} 0;
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

export const StyledListContent = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(161px, 1fr));
	grid-gap: ${rem(48)};
	margin-bottom: ${rem(48)};

	@media (min-width: 769px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (min-width: 1025px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;
