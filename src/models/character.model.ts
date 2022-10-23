export interface Character {
	id: number;
	name: string;
	status: string;
	species: string;
	type?: string;
	gender: string;
	origin?:  Location;
	location?: Location;
	image: string;
	created?: string;
	episode: Episode[];
}

export interface Episode {
	name?: string;
	episode?: string;
	air_date: string;
}

export interface Location {
	name: string;
	type: string;
	dimension: string;
	residents: Character[];
}