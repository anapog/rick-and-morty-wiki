import styled from 'styled-components';
import { rem } from 'polished';
import { Link } from 'react-router-dom';

export const StyledReactLink = styled(Link)`
	display: flex;
	align-items: center;
	margin: ${rem(20)} 0;
	gap: ${rem(10)};
	font-family: 'Poppins';
	color: black;
	text-decoration: none;
	font-size: ${rem(18)};
`;
