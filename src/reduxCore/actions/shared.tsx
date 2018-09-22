import axios from 'axios';
import {Dispatch} from 'redux';

import {
  API_KEY,
  API_URL,
  IMAGE_PER_PAGE,
  REQUEST_METHOD
} from "../../utils/UrlBuilder";

export const FETCH_IMAGES = 'FETCH_IMAGES';

// TODO specify images type
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
        extras: 'description,url_c,url_n,tags,views,date_taken',
        per_page: IMAGE_PER_PAGE,
        page: 1,
        nojsoncallback: 1,
      }
    }
  )
    .then(response => {
      console.log(response);
      dispatch(fetchImages(response.data.photos.photo))
    })
    .catch(error => {
      throw(error);
    })
};
