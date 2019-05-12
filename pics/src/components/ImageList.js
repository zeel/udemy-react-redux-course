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
  renderEmptyContainer() {
    return <div className="ui segment empty-container">No Images Found</div>;
  }
  render() {
    const images = this.props.images;
    const imageNodes = this.props.images.map(image => {
      return <ImageCard image={image} key={image.id} />;
    });
    return images.length > 0 ? (
      <div className="ui segment image-list">{imageNodes}</div>
    ) : (
      this.renderEmptyContainer()
    );
  }
}
export default ImageList;
