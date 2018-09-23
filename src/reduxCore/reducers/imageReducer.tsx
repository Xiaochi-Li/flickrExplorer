import {imageType} from "../../DataType/DataType";
import {FETCH_IMAGES, TOGGLE_LIKE} from "../actions/imageActions";

// TODO action type
/*
 *
 */
export default function imagesReducer(state = {images: []}, action: any) {
  switch (action.type) {

    case FETCH_IMAGES:
      const {images} = action;
      return {
        ...state,
        images: extractImagesInfo(images)
      };

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

const extractTags = (tags: string) => {
  return tags.split(" ");
};

// TODO method needed refactor, cost too much to loop over all list to find one.
const toogleImageLike = (image: imageType, toggoledID: string) => {
  if (image.id === toggoledID) {
    return {
      ...image,
      isLiked: !image.isLiked,
    }
  }
  return image;
};
