import styled from 'styled-components';
import { rem } from 'polished';

export const StyledTableContent = styled.div`
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
