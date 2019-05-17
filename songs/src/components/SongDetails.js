import React from "react";
import PropTypes from "prop-types";
import "./SongDetails.css";
class SongDetails extends React.PureComponent {
  static propTypes = {
    song: PropTypes.objectOf({
      title: PropTypes.string,
      length: PropTypes.number
    })
  };
  render() {
    return (
      <div className="song-details">
        <h1>Details For:</h1>
        <div className="song-details__description">
          Title: {this.props.song.title}
          <br />
          <br />
          Length: {this.props.song.length}
          <br />
        </div>
      </div>
    );
  }
}
export default SongDetails;
