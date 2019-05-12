import React from "react";
import "./imageCard.css";

const IMAGE_CARD_GRID_HEIGHT = 10;

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.image = React.createRef();
    this.state = { rowEnd: 0 };
  }
  componentDidMount() {
    this.image.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    this.setState({
      rowEnd: Math.ceil(
        (this.image.current.clientHeight + 25) / IMAGE_CARD_GRID_HEIGHT
      )
    });
  };
  render() {
    const { image } = this.props;
    return (
      <div
        className="image-card"
        style={{
          gridRowEnd: `span ${this.state.rowEnd}`,
          visibility: `${this.state.rowEnd ? "visible" : "hidden"}`
        }}
      >
        <img
          className="ui image"
          alt={image.alt}
          src={image.url}
          ref={this.image}
        />
      </div>
    );
  }
}
export default ImageCard;
