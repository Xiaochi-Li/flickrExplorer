import * as React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom'

import {Card, Col, Icon, Row} from "antd";
import {imageType} from "../../DataType/DataType";
import {toggleLike} from "../../reduxCore/actions/imageActions";
// import {Dispatch} from "redux";

const {Meta} = Card;

interface InterfaceImages {
  images: any;
  clickLikeButton: (imageID: string) => void
}

const Images: React.SFC<InterfaceImages> = (props) => {

  // TODO ragulr images type
  const renderImageCards = (images: imageType[]) => {
    return images.map((image: imageType) => {
      const clickLikeButton = () => {
        props.clickLikeButton(image.id);
      };
      return (
        <Col key={image.id}>
          <Link to={`images/${image.id}`}>
            <Card
              hoverable={true}
              style={{margin: 16}}
              cover={<img alt="example" src={image.imageUrlSmall}/>}
            >
              <Meta
                title={image.title}
                description={`Views: ${image.views}`}
              />
              <a onClick={clickLikeButton}>
                {image.isLiked ?
                  <Icon type="heart" theme="filled" style={{color: "#eb2f96"}}/> :
                  <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96"/>}
              </a>
            </Card>
          </Link>
        </Col>)
    })
  };

  return (
    <Row type="flex" justify="center" align="top">
      {renderImageCards(props.images)}
    </Row>
  )
};

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

// TODO dispatch type
const mapDispatchToProps = (dispatch: any) => {
  return ({
    clickLikeButton: (imageID: string) => {
      dispatch(toggleLike(imageID))
    }
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Images)