export const fetchShowEpisodes = async (id) => await fetch(`http://api.tvmaze.com/shows/${id}/episodes`);
