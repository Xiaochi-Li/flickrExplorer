import * as React from 'react';

import {Col, Row} from "antd";
import {connect} from "react-redux";
import {imageType} from "../../DataType/DataType";

interface InterfaceImages {
  images: any;
}

// TODO ragulr images type
const renderImageCards = (images: imageType[]) => {
  return images.map((image: imageType) => {
    return (<Col key={image.id}>
      {image.id}
    </Col>)
  })
};

const Images: React.SFC<InterfaceImages> = (props) => {
  return (
    <Row>

      {renderImageCards(props.images)}
    </Row>
  )
}

// TODO define state shape
const mapStateToProps = (state: any) => {
  console.log(state);
  return {images: state.imagesReducer.images}
};

export default connect(mapStateToProps)(Images)
