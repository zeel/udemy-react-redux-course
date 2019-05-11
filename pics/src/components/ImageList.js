import React from "react";
import ImageCard from "./ImageCard";

import "./imageList.css";
// import PropTypes from "prop-types";

class ImageList extends React.Component {
  // static propTypes = {
  //   images: PropTypes.arrayOf({
  //     id: PropTypes.string,
  //     url: PropTypes.string,
  //     alt: PropTypes.string
  //   }).isRequired
  // };
  render() {
    const images = this.props.images.map(image => {
      return <ImageCard image={image} key={image.id} />;
    });
    return <div className="ui segment image-container">{images}</div>;
  }
}
export default ImageList;
