export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`
    }
};

export const MOVIECARD_IMAGE_URL = "https://image.tmdb.org/t/p/w500/";