import axios from 'axios';
import { urls } from '../../constants/baseUrls';
import { handleApiResponseErrorCase } from '../../utils';
import { types } from './types';

export const getPhotos = (queryParams) => async dispatch => {
    try {
        const res = await axios.get(urls.searchBaseUrl, {params: queryParams});
        dispatch({
            type: types.GET_PHOTOS,
            payload: res.data.items,
            totalPages: res.data.searchInformation.totalResults
        })
    } catch (error) {
        handleApiResponseErrorCase(error);
    }
}

export const clearPhotos = () => async dispatch => {
    dispatch({
        type: types.CLEAR_PHOTOS
    })
}