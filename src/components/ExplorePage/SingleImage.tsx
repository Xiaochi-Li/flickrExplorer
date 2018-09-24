import * as React from 'react';
import {connect} from "react-redux";

import {Card, Col, Tag} from "antd";
import {imageType} from "../../DataType/DataType";

const {Meta} = Card;

interface InterfaceSingleImage {
  title: string,
  views: number,
  description: string,
  imageUrlLarge: string,
  tags: string[],
}

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
      <Card style={{width: '100%'}}
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

const mapStateToProps = (state: any) => {
  const images = state.imagesReducer.images;
  const userIsViewingID = state.userReducer.userIsViewing;
  const userIsViewingImage = images.find((image: imageType) => {
    return image.id === userIsViewingID;
  })

  return {...userIsViewingImage};
};

export default connect(mapStateToProps)(SingleImage)
