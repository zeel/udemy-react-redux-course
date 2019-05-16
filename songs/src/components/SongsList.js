import React from "react";
import PropTypes from "prop-types";

class SongsList extends React.PureComponent {
  static propTypes = {
    songs: PropTypes.arrayOf({
      title: PropTypes.string,
      length: PropTypes.number
    }),
    onSongSelect: PropTypes.func.isRequired
  };
  renderSongItem(song, index) {
    return (
      <div>
        <span>{song.title}</span>
        <button onClick={this.props.onSongSelect.bind(undefined, index)}>
          Select
        </button>
      </div>
    );
  }
  render() {
    const songsNode = this.props.songs.map((song, index) =>
      this.renderSongItem(song, index)
    );
    return <div className="songs-list">{songsNode}</div>;
  }
}
export default SongsList;
