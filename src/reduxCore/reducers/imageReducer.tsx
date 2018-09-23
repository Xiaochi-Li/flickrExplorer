import {FETCH_IMAGES, TOGGLE_LIKE} from "../actions/imageActions";
import {imageType} from "../../DataType/DataType";

export default function imagesReducer(state = {images: []}, action: any) {
  switch (action.type) {
    // COMENT
    case FETCH_IMAGES:
      const {images} = action;
      return {
        images: extractImagesInfo(images),
      };
    // COMENT
    case TOGGLE_LIKE:
      const newImages = state.images.map((image: imageType) => {
        if (image.id === action.id) {
          return {
            ...image,
            isLiked: !image.isLiked,
          }
        }
        return image;
      });
      return {
        ...state,
        images: [...newImages]
      }
    default:
      return {...state};
  }
};

function extractImagesInfo(images: any) {
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
      isLiked: false,
      imageUrlSmall: url_n,
      imageUrlLarge: url_c,
      tags: extractTags(tags),
    }
  });
  return extractedImages;
}

function extractTags(tags: string) {
  return tags.split(" ");
}
