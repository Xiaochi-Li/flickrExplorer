import * as React from 'react';
import {connect} from "react-redux";

import {Card, Col, Tag} from "antd";
import {imageType} from "../../DataType/DataType";

const {Meta} = Card;


interface InterfaceSingleImage {
  /** the title of the */
  title: string,
  /** the number of people views */
  views: number,
  /** detailed description of the image */
  description: string,
  /** url for large size image */
  imageUrlLarge: string,
  /** array of tags of image */
  tags: string[],
}

/**
 * component display a single image in more detail
 */
const SingleImage: React.SFC<InterfaceSingleImage> = (props) => {
  const {title, description, imageUrlLarge, tags} = props;
  const renderTags = () => {
    if (tags) {
      return tags.map((tag: string) => {
        return <Tag key={tag}>{tag}</Tag>
      })
    }
    return null;
  };

  return (
    <Col span={24}>
      <Card
        style={{width: '100%'}}
        cover={
          <img
            alt={title}
            style={{width: '100%', objectFit: 'cover'}}
            src={imageUrlLarge}
          />}
      >
        <div>
          {renderTags()}
        </div>
        <Meta title={title}
              description={description}/>
      </Card>
    </Col>
  )
};

/**
 * map the props of one image that user wants to see in detail.
 *
 * @param {} state redux state
 * @return {}
 */
const mapStateToProps = (state: any) => {
  const images = state.imagesReducer.images;
  const userIsViewingID = state.userReducer.userIsViewing;
  const userIsViewingImage = images.find((image: imageType) => {
    return image.id === userIsViewingID;
  });

  return {...userIsViewingImage};
};

export default connect(mapStateToProps)(SingleImage)
