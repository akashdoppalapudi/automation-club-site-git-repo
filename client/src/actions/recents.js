import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api/recents';

export const getRecents = () => async (dispatch) => {
    try {
        const { data } = await api.fetchRecents();
        dispatch ({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createRecent = (post) => async (dispatch) => {
    try {
        const { data } = await api.createRecent(post);
        dispatch ({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const updateRecent = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updateRecent(id, post);
        dispatch ({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const deleteRecent = (id) => async (dispatch) => {
    try {
        await api.deleteRecent(id);
        dispatch ({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
};
