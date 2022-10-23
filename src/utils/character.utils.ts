export const getParsedEpisodes = (list: string[]): string[] => {
	const listToDisplay = list?.map((episode: string) => episode.split('/').slice(-1)[0]);
	return listToDisplay.filter(item => item && item.length);
};
