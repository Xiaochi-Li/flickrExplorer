import axios from 'axios';
import {Dispatch} from 'redux';

import {
  API_KEY,
  API_URL,
  EXTRA_IMAGE_PARAMETERS,
  IMAGE_PER_PAGE,
  REQUEST_METHOD
} from "../../utils/UrlConstant";

export const FETCH_IMAGES = 'FETCH_IMAGES';
export const TOGGLE_LIKE = 'TOGGLE_LIKE';

export const fetchImages = (images: any) => {
  return {
    type: FETCH_IMAGES,
    images,
  }
};

// helper function make api call to get all images.
export const handleFetchImages = (dispatch: Dispatch) => {
  return axios.get(API_URL, {
      params: {
        method: REQUEST_METHOD,
        api_key: API_KEY,
        format: 'json',
        extras: EXTRA_IMAGE_PARAMETERS,
        per_page: IMAGE_PER_PAGE,
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

export const toggleLike = (id: string) => {
  return {
    type: TOGGLE_LIKE,
    id
  }
};
