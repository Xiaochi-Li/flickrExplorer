import * as React from 'react';

import {Card, Col, Row} from "antd";
import {connect} from "react-redux";
import {imageType} from "../../DataType/DataType";

const {Meta} = Card;

interface InterfaceImages {
  images: any;
}

// TODO ragulr images type
const renderImageCards = (images: imageType[]) => {
  return images.map((image: imageType) => {
    return (<Col key={image.id}>
      <Card
        hoverable={true}
        style={{margin:16}}
        cover={<img alt="example" src={image.imageUrlSmall}/>}
      >
        <Meta
          title={image.title}
          description = {`Views: ${image.views}`}
        />
      </Card>
    </Col>)
  })
};

const Images: React.SFC<InterfaceImages> = (props) => {
  return (
    <Row type="flex" justify="center" align="top">
      {renderImageCards(props.images)}
    </Row>
  )
}

// TODO define state shape
/**
 * map basic images data from state to props. Image list is sorted decentding on view
 * numbers.
 *
 * @param {} state redux state
 * @return {}
 */
const mapStateToProps = (state: any) => {
  const images = state.imagesReducer.images.map((image: imageType) => {
    const {
      id,
      title,
      views,
      isLiked,
      imageUrlSmall
    } = image;

    return {
      id,
      title,
      views,
      isLiked,
      imageUrlSmall
    };
  });
  return {images}
};

export default connect(mapStateToProps)(Images)
