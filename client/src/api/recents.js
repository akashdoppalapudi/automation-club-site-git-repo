import axios from 'axios';

const url = "https://automation-club-site.herokuapp.com/recents";

export const fetchRecents = () => axios.get(url);
export const createRecent = (newRecent) => axios.post(url, newRecent);
export const updateRecent = (id, updatedRecent) => axios.patch(`${url}/${id}`, updatedRecent);
export const deleteRecent = (id) => axios.delete(`${url}/${id}`);