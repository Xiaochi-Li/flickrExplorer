import * as React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom'

import {Card, Col, Icon, Row} from "antd";
import {imageType} from "../../DataType/DataType";
import {toggleLike} from "../../reduxCore/actions/imageActions";
import {selectImage} from "../../reduxCore/actions/userAction";

const {Meta} = Card;

interface InterfaceImages {
  /** a list of images data*/
  images: imageType[];

  /** dispatch function for like and unlike image */
  clickLikeButton: (imageID: string) => void;
  /** dispatch function for choosing image for detailed view */
  clickOnImage: (imageID: string) => void
}

/**
 * component display a collection of images
 */
const Images: React.SFC<InterfaceImages> = (props) => {
  const renderImageCards = (images: imageType[]) => {
    return images.map((image: imageType) => {

      /*
       * a helper function handles react click event,
       * doing so avoid inline binding in JSX code,
       * witch may have performance issue
       */
      const clickLikeButton = () => {
        props.clickLikeButton(image.id);
      };

      /*
       * a helper function handles react click event,
       * doing so avoid inline binding in JSX code,
       * witch may have performance issue
       */
      const clickOnImage = () => {
        props.clickOnImage(image.id)
      };

      return (
        <Col key={image.id}>
          <Link to={`images/${image.id}`}>
            <Card
              onClick={clickOnImage}
              hoverable={true}
              style={{margin: 16, width: 300}}
              cover={
                <img
                  alt={image.title}
                  style={{height: 200, width: 300, objectFit: 'cover'}}
                  src={image.imageUrlSmall}
                />}
            >
              <Meta
                title={image.title}
                description={`Views: ${image.views}`}
              />
              <div onClick={clickLikeButton}>
                {image.isLiked ?
                  <Icon type="heart" theme="filled" style={{color: "#eb2f96"}}/> :
                  <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96"/>}
              </div>
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

/**
 * map rudux action functions as props to react component
 * @param { dispatch } dispatch function
 * @return { action functions }
 */
// TODO dispatch type
const mapDispatchToProps = (dispatch: any) => {
  return ({
    clickLikeButton: (imageID: string) => {
      dispatch(toggleLike(imageID))
    },
    clickOnImage: (imageID: string) => {
      dispatch(selectImage(imageID))
    }
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Images)
