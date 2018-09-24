// action type constance
export const SELECT_IMAGE = 'SELECT_IMAGE';

/**
 *
 * @param id of the image user wants to see in detail.
 */
export const selectImage = (id: string) => {
  return {
    type: SELECT_IMAGE,
    id
  }
};
