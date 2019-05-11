import React from "react";

const IMAGE_CARD_HEIGHT = 10;

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.image = React.createRef();
    this.label = React.createRef();
    this.state = { rowEnd: 1 };
  }
  componentDidMount() {
    this.image.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    console.log(this.image.current.clientHeight);
    this.setState({
      rowEnd: Math.ceil(
        (this.image.current.clientHeight +
          this.label.current.clientHeight +
          10) /
          IMAGE_CARD_HEIGHT
      )
    });
  };
  render() {
    const { image } = this.props;
    return (
      <div style={{ gridRowEnd: `span ${this.state.rowEnd}` }}>
        <label ref={this.label} className="ui label">
          {image.alt}
        </label>
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
