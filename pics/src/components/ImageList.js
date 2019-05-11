import React from "react";
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
    return (
      <div className="ui segment">
        {this.props.images.map(image => {
          return (
            <div key={image.id}>
              <label className="ui label">{image.alt}</label>
              <img className="ui small image" alt={image.alt} src={image.url} />
            </div>
          );
        })}
      </div>
    );
  }
}
export default ImageList;
