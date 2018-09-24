export interface imageType {
  /** image ID */
  id: string,
  /** the date that image was taken */
  dateTaken: Date,
  /** the title of the */
  title:string,
  /** the number of people views */
  views: number,
  /** detailed description of the image */
  description: string,
  /** does the user like the image */
  isLiked: boolean,
  /** url for small size image */
  imageUrlSmall: string,
  /** url for large size image */
  imageUrlLarge: string,
}
