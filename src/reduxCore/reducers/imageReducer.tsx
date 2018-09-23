import {FETCH_IMAGES} from "../actions/imageActions";

export default function imagesReducer(state = {images: []}, action: any) {
  switch (action.type) {
    case FETCH_IMAGES:
      const {images} = action;
      return {
        ...state,
        images: extractImagesInfo(images),
      };
    default:
      return state;
  }
};

function extractImagesInfo(images: any) {
  const extractedImages = images.map((image: any) => {
    const {id, datetaken, title, views, description, tags, url_c, url_n} = image;
    return {
      id,
      datetaken,
      title,
      views,
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
