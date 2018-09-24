import axios from 'axios';
import {Dispatch} from 'redux';

import {
  API_KEY,
  API_URL,
  DATE_OF_IMAGES,
  EXTRA_IMAGE_PARAMETERS,
  IMAGE_PER_PAGE,
  REQUEST_METHOD
} from "../../utils/UrlConstant";

// action type const
export const FETCH_IMAGES = 'FETCH_IMAGES';
// action type const
export const TOGGLE_LIKE = 'TOGGLE_LIKE';

/**
 * action creator for FETCH_IMAGES
 * @param images
 */
export const fetchImages = (images: any) => {
  return {
    type: FETCH_IMAGES,
    images,
  }
};

/**
 * action creator for TOGGLE_LIKE
 * @param id of the image that user just toggled like.
 */
export const toggleLike = (id: string) => {
  return {
    type: TOGGLE_LIKE,
    id
  }
};

/**
 * helper function fetch all initial images data
 * @param dispatch
 */
export const handleFetchImages = (dispatch: Dispatch) => {
  return axios.get(API_URL, {
      params: {
        method: REQUEST_METHOD,
        api_key: API_KEY,
        format: 'json',
        extras: EXTRA_IMAGE_PARAMETERS,
        per_page: IMAGE_PER_PAGE,
        date: DATE_OF_IMAGES,
        page: 1,
        nojsoncallback: 1,
      }
    }
  )
    .then(response => {
      dispatch(fetchImages(response.data.photos.photo))
    })
    .catch(error => {
      throw(error);
    })
};
