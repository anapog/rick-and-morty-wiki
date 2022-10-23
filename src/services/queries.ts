import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
	query getCharacters {
		characters {
			info {
				count
				pages
			}
			results {
				id
				name
				status
				species
				gender
				image
				episode {
					air_date
				}
			}
		}
	}
`;

export const GET_CHARACTER = gql`
	query getCharacter($id: ID!) {
		character(id: $id) {
			name
			status
			species
			gender
			image
			type
			location {
				name
				type
				dimension
				residents {
					name
				}
			}
			episode {
				air_date
				name
				episode
			}
		}
	}
`;
