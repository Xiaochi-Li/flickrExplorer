export const SELECT_IMAGE = 'SELECT_IMAGE';

export const selectImage = (id: string) => {
  return {
    type: SELECT_IMAGE,
    id
  }
}
