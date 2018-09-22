import axios from 'axios';

export const FETCH_IMAGES = 'FETCH_IMAGES';


// const API_URL = 'https://api.flickr.com/services/rest/?method=flickr.interestingness.getList\n' +
//   '&api_key=44376a3002624e5347abb9c842a0da30&format=json&extras=date_taken&extras=owner_name';

// TODO specify images type

export const fetchImages = (images: any) => {
  return {
    type: FETCH_IMAGES,
    images,
  }
};

// helper function make api call to get all images.
export const handleFetchImages = (dispatch: any) => {
  return axios.get(" https://api.flickr.com/services/rest/?method=flickr.interestingness.getList\n" +
    "&api_key=44376a3002624e5347abb9c842a0da30&format=json")
    .then(response => {
      dispatch(fetchImages(response.data))
    })
    .catch(error => {
      throw(error);
    })
};
