import {imageType} from "../../DataType/DataType";
import {FETCH_IMAGES, TOGGLE_LIKE} from "../actions/imageActions";

/*
 * reducer handle image relative actions
 */
export default function imagesReducer(state = {images: []}, action: any) {
  switch (action.type) {
    // format image data of get api call
    case FETCH_IMAGES:
      const {images} = action;
      return {
        ...state,
        images: extractImagesInfo(images)
      };
    //
    case TOGGLE_LIKE:
      // TODO try find other way of doing toogle, cost too much to loop over all list to find one.
      const newImages = state.images.map(
        (image) => toogleImageLike(image, action.id)
      );
      return {
        ...state,
        images: [...newImages]
      };

    default:
      return {...state};
  }
};

/**
 * helper function abstract, process and format images data fetched from api
 * @param images
 */
const extractImagesInfo = (images: any) => {
  const extractedImages = images.map((image: any) => {
    const {
      id,
      dateTaken,
      title,
      views,
      description,
      tags,
      url_c,
      url_n
    } = image;

    return {
      id,
      dateTaken,
      title,
      views: Number(views),
      description: description._content,
      imageUrlSmall: url_n,
      imageUrlLarge: url_c,
      tags: extractTags(tags),
    }
  });
  return extractedImages;
};

/**
 * helper function convert long tags string to single tabs
 * @param tags a string referents all tags
 */
const extractTags = (tags: string) => {
  return tags.split(" ");
};

/**
 * call back function define how .map function maps.
 * only image that like is toggles can be modified.
 * @param image
 * @param toggoledID
 */
const toogleImageLike = (image: imageType, toggoledID: string) => {
  if (image.id === toggoledID) {
    return {
      ...image,
      isLiked: !image.isLiked,
    }
  }
  return image;
};
